import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createServer} from 'node:http';
import {once} from 'node:events';
import {PGlite} from '@electric-sql/pglite';
import {repository} from '../server/repository.js';
import {createApp} from '../server/app.js';
import {verifyPassword,validState} from '../server/security.js';
const state=()=>({v:1,p:{name:'Asto',lvl:0,goal:'viagens',min:10,theme:'dark',snd:1,rm:0,on:1},xp:0,days:{},done:{},srs:{},fav:{},acc:{},sess:null,last:null});
test('PostgreSQL + HTTP: accounts, sessions, isolation, language preference and revision checks',async()=>{
 const db=new PGlite();await db.exec(await readFile(new URL('../db/schema.sql',import.meta.url),'utf8'));
 const pool={query:(...args)=>db.query(...args),async connect(){return{query:(...args)=>db.query(...args),release(){}}}};
 const repo=repository(pool);let handler;const server=createServer((q,s)=>handler(q,s));server.listen(0,'127.0.0.1');await once(server,'listening');const base='http://127.0.0.1:'+server.address().port;handler=createApp(repo,{siteURL:base});
 async function call(path,{method='GET',body,cookie,origin=base}={}){const r=await fetch(base+path,{method,headers:{'Content-Type':'application/json',...(method!=='GET'?{Origin:origin}:{}),...(cookie?{Cookie:cookie}:{})},body:body===undefined?undefined:JSON.stringify(body)});const content=await r.text();return{status:r.status,data:content.startsWith('{')?JSON.parse(content):content,cookie:r.headers.get('set-cookie'),headers:r.headers}}
 try{
  let r=await call('/api/auth/register',{method:'POST',body:{email:'one@example.com',name:'First',password:'safe-password-123',language:'en'}});assert.equal(r.status,201);assert.equal(r.data.user.preferred_language,'en');assert.match(r.cookie,/HttpOnly/);assert.match(r.cookie,/SameSite=Lax/);const one=r.cookie.split(';')[0];
  const first=await repo.findUser('one@example.com');assert.notEqual(first.password_hash,'safe-password-123');assert(await verifyPassword('safe-password-123',first.password_hash));const sessions=await db.query('SELECT token_hash FROM parlo_sessions');assert.equal(sessions.rows[0].token_hash.length,64);assert.notEqual(sessions.rows[0].token_hash,one.split('=')[1]);
  r=await call('/api/auth/register',{method:'POST',body:{email:'two@example.com',name:'Second',password:'another-password',language:'it'}});assert.equal(r.status,201);const two=r.cookie.split(';')[0];
  assert.equal((await call('/api/progress/en')).status,401);
  assert.equal((await call('/api/auth/login',{method:'POST',body:{email:'one@example.com',password:'wrong-password'}})).status,401);
  assert.equal((await call('/api/auth/login',{method:'POST',origin:'https://evil.invalid',body:{email:'one@example.com',password:'safe-password-123'}})).status,403);
  const progress=state();progress.xp=60;progress.done['0-0']=1;progress.fav['0-0-0']=true;
  r=await call('/api/progress/en',{method:'PUT',cookie:one,body:{state:progress,revision:0,user_id:r.data.user.id}});assert.equal(r.status,200);assert.equal(r.data.revision,1);
  r=await call('/api/progress/en',{cookie:two});assert.equal(r.data.state,null);assert.equal(r.data.revision,0);
  r=await call('/api/progress/it',{cookie:one});assert.equal(r.data.state,null);
  r=await call('/api/progress/en',{cookie:one});assert.equal(r.data.state.xp,60);
  r=await call('/api/progress/en',{method:'PUT',cookie:one,body:{state:state(),revision:0}});assert.equal(r.status,409);assert.equal(r.data.state.xp,60);
  progress.xp=70;r=await call('/api/progress/en',{method:'PUT',cookie:one,body:{state:progress,revision:1}});assert.equal(r.data.revision,2);
  r=await call('/api/progress/en',{method:'PUT',cookie:one,body:{state:{...state(),xp:-1},revision:2}});assert.equal(r.status,400);
  const bad=JSON.parse(JSON.stringify(state()));bad.fav=JSON.parse('{"__proto__":{"polluted":true}}');assert.equal(validState(bad),false);
  r=await call('/api/auth/preferences',{method:'PATCH',cookie:one,body:{language:'it'}});assert.equal(r.status,200);assert.equal((await call('/api/auth/me',{cookie:one})).data.user.preferred_language,'it');
  const secondSession=(await call('/api/auth/login',{method:'POST',body:{email:'one@example.com',password:'safe-password-123'}})).cookie.split(';')[0];
  r=await call('/api/auth/password',{method:'POST',cookie:one,body:{currentPassword:'safe-password-123',password:'new-password-456'}});assert.equal(r.status,200);const renewed=r.cookie.split(';')[0];assert.equal((await call('/api/auth/me',{cookie:secondSession})).data.user,null);assert.equal((await call('/api/auth/me',{cookie:one})).data.user,null);assert.equal((await call('/api/auth/me',{cookie:renewed})).data.user.email,'one@example.com');
  await call('/api/auth/logout',{method:'POST',cookie:renewed,body:{}});assert.equal((await call('/api/auth/me',{cookie:renewed})).data.user,null);
  for(const asset of ['/.env','/server/repository.js','/db/schema.sql'])assert.equal((await call(asset)).status,404);
  for(const route of ['/','/english.js','/privacidade','/termos','/cookies','/robots.txt','/sitemap.xml'])assert.equal((await call(route)).status,200,route);
  const home=await call('/');assert.match(home.headers.get('content-security-policy'),/frame-ancestors 'none'/);
  assert.equal(await repo.hitLimit('a'.repeat(64),1),false);assert.equal(await repo.hitLimit('a'.repeat(64),1),true);
  await db.exec("CREATE ROLE anonymous_user; SET ROLE anonymous_user;");await assert.rejects(db.query('SELECT * FROM parlo_users'));await db.exec('RESET ROLE');
  const prod=createApp(repo,{siteURL:'https://parlo.example',production:true});handler=prod;r=await call('/api/auth/login',{method:'POST',origin:'https://parlo.example',body:{email:'two@example.com',password:'another-password'}});assert.match(r.cookie,/__Host-parlo_session=/);assert.match(r.cookie,/; Secure/);
 }finally{server.closeAllConnections();await new Promise(r=>server.close(r));await db.close()}
});
