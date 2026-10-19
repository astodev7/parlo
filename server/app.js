import {randomUUID} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {hashPassword,verifyPassword,newToken,tokenHash,validPassword,validState} from './security.js';
const publicDir=new URL('../public/',import.meta.url);
const assets={'/':'index.html','/index.html':'index.html','/styles.css':'styles.css','/app.js':'app.js','/vocabulary.js':'vocabulary.js','/grammar.js':'grammar.js','/courses.js':'courses.js','/learning.js':'learning.js','/progress-validator.cjs':'progress-validator.cjs','/english.js':'english.js','/privacidade':'privacy.html','/termos':'terms.html','/cookies':'cookies.html'};
const types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',cjs:'text/javascript; charset=utf-8'};
const publicUser=u=>({id:u.id,email:u.email,name:u.name,preferred_language:u.preferred_language});
export function createApp(repo,{siteURL='http://localhost:3000',production=false}={}){
 const origin=new URL(siteURL).origin,cookieName=production?'__Host-parlo_session':'parlo_session',limits=new Map();
 const dummyHash=hashPassword('unavailable-user-dummy-password');
 function limit(key,max){const now=Date.now();if(limits.size>10000)for(const[k,v]of limits)if(v.until<now)limits.delete(k);const v=limits.get(key);if(!v||v.until<now){limits.set(key,{count:1,until:now+15*60e3});return false}return ++v.count>max}
 const json=(res,code,data)=>{res.writeHead(code,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data))};
 const cookie=(token,seconds)=>`${cookieName}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${seconds}${production?'; Secure':''}`;
 async function body(req){if(!/^application\/json(?:;|$)/i.test(req.headers['content-type']||''))throw Object.assign(Error('Envie JSON válido.'),{status:415});if(req.body!==undefined){const raw=typeof req.body==='string'?req.body:Buffer.isBuffer(req.body)?req.body.toString('utf8'):JSON.stringify(req.body);if(Buffer.byteLength(raw)>350000)throw Object.assign(Error('Dados muito grandes.'),{status:413});try{return JSON.parse(raw)}catch{throw Object.assign(Error('JSON inválido.'),{status:400})}}let size=0,parts=[];for await(const part of req){size+=part.length;if(size>350000)throw Object.assign(Error('Dados muito grandes.'),{status:413});parts.push(part)}try{return JSON.parse(Buffer.concat(parts).toString())}catch{throw Object.assign(Error('JSON inválido.'),{status:400})}}
 async function session(req){const raw=(req.headers.cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(cookieName+'='))?.slice(cookieName.length+1);if(!/^[a-f0-9]{64}$/.test(raw||''))return {};const hash=tokenHash(raw),user=await repo.getSession(hash);return {hash,user}}
 async function issue(res,user){const token=newToken();await repo.createSession(tokenHash(token),user.id,new Date(Date.now()+30*864e5));res.setHeader('Set-Cookie',cookie(token,30*86400))}
 return async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');res.setHeader('X-Frame-Options','DENY');res.setHeader('Permissions-Policy','camera=(), microphone=(self), geolocation=()');
  res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; object-src 'none'");
  if(production)res.setHeader('Strict-Transport-Security','max-age=31536000; includeSubDomains');
  try{
   const url=new URL(req.url,origin),path=url.pathname;
   if(path==='/robots.txt'&&req.method==='GET'){res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});return res.end('User-agent: *\nDisallow: /api/\nDisallow: /public/\nSitemap: '+origin+'/sitemap.xml\n')}
   if(path==='/sitemap.xml'&&req.method==='GET'){res.writeHead(200,{'Content-Type':'application/xml; charset=utf-8'});return res.end('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+['/','/privacidade','/termos','/cookies'].map(p=>'<url><loc>'+origin+p+'</loc></url>').join('')+'</urlset>')}
   if(!path.startsWith('/api/')){if(!['GET','HEAD'].includes(req.method))return json(res,405,{error:'Método não permitido.'});const asset=assets[path];if(!asset)return json(res,404,{error:'Arquivo não encontrado.'});const bytes=await readFile(new URL(asset,publicDir));res.writeHead(200,{'Content-Type':types[asset.split('.').pop()],'Cache-Control':'no-cache'});return res.end(req.method==='HEAD'?undefined:bytes)}
   if(req.method==='OPTIONS')return json(res,405,{error:'Origem não permitida.'});
   if(!['GET','HEAD'].includes(req.method)&&req.headers.origin!==origin)return json(res,403,{error:'Origem não permitida. Confira SITE_URL.'});
   const ip=req.socket.remoteAddress||'unknown'; // Never trust arbitrary X-Forwarded-For headers.
   if(limit('all:'+ip,1200))return json(res,429,{error:'Muitas solicitações. Tente novamente mais tarde.'});
   if(path==='/api/health'&&req.method==='GET')return json(res,200,{ok:true});
   if(['/api/auth/login','/api/auth/register'].includes(path)&&req.method==='POST'){
    if(await repo.hitLimit(tokenHash('auth-ip:'+ip),100))return json(res,429,{error:'Muitas tentativas. Aguarde 15 minutos.'});
    const b=await body(req),email=typeof b.email==='string'?b.email.trim().toLowerCase():'';
    if(email.length>254||!/^\S+@\S+\.\S+$/.test(email)||!validPassword(b.password))return json(res,400,{error:'Informe um e-mail válido e uma senha de 8 a 128 caracteres.'});
    if(await repo.hitLimit(tokenHash('auth-email:'+email),15))return json(res,429,{error:'Muitas tentativas para esta conta. Aguarde 15 minutos.'});
    if(path.endsWith('/register')){
     if(b.website)return json(res,400,{error:'Não foi possível concluir o cadastro.'});if(!['it','en'].includes(b.language))return json(res,400,{error:'Escolha italiano ou inglês.'});
     const name=typeof b.name==='string'?b.name.trim():'';if(!name||name.length>80)return json(res,400,{error:'Informe um nome de até 80 caracteres.'});
     try{const u=await repo.createUser({id:randomUUID(),email,name,password_hash:await hashPassword(b.password),preferred_language:b.language});await issue(res,u);return json(res,201,{user:publicUser(u)})}catch(e){if(e.code==='23505')return json(res,409,{error:'Não foi possível cadastrar este e-mail. Tente entrar na sua conta.'});throw e}
    }
    const u=await repo.findUser(email),valid=await verifyPassword(b.password,u?.password_hash||await dummyHash);if(!u||!valid)return json(res,401,{error:'E-mail ou senha incorretos.'});await issue(res,u);return json(res,200,{user:publicUser(u)});
   }
   const auth=await session(req);
   if(path==='/api/auth/me'&&req.method==='GET')return json(res,200,{user:auth.user?publicUser(auth.user):null});
   if(!auth.user)return json(res,401,{error:'Entre na sua conta para continuar.'});
   if(path==='/api/auth/logout'&&req.method==='POST'){await repo.deleteSession(auth.hash);res.setHeader('Set-Cookie',cookie('',0));return json(res,200,{ok:true})}
   if(path==='/api/auth/preferences'&&req.method==='PATCH'){const b=await body(req);if(!['it','en'].includes(b.language))return json(res,400,{error:'Idioma inválido.'});await repo.setLanguage(auth.user.id,b.language);return json(res,200,{ok:true})}
   if(path==='/api/auth/password'&&req.method==='POST'){
    if(await repo.hitLimit(tokenHash('password:'+auth.user.id),5))return json(res,429,{error:'Aguarde 15 minutos para tentar novamente.'});
    const b=await body(req);if(!validPassword(b.currentPassword)||!validPassword(b.password))return json(res,400,{error:'A nova senha precisa ter entre 8 e 128 caracteres.'});if(!await verifyPassword(b.currentPassword,await repo.passwordHash(auth.user.id)))return json(res,400,{error:'Senha atual incorreta.'});await repo.changePassword(auth.user.id,await hashPassword(b.password));await issue(res,auth.user);return json(res,200,{ok:true});
   }
   const match=path.match(/^\/api\/progress\/(it|en)$/);
   if(match&&req.method==='GET')return json(res,200,await repo.getProgress(auth.user.id,match[1]));
   if(match&&req.method==='PUT'){
    const b=await body(req);if(!validState(b.state)||!Number.isInteger(b.revision)||b.revision<0)return json(res,400,{error:'Progresso inválido. Exporte um backup e tente novamente.'});
    const revision=await repo.putProgress(auth.user.id,match[1],b.state,b.revision);if(revision===null)return json(res,409,{error:'Há um progresso mais recente em outro dispositivo.',...(await repo.getProgress(auth.user.id,match[1]))});return json(res,200,{revision});
   }
   return json(res,404,{error:'Rota não encontrada.'});
  }catch(e){if(e.status)return json(res,e.status,{error:e.message});console.error('PARLO request failed:',e.code||e.name);if(!res.headersSent)json(res,503,{error:'O serviço está temporariamente indisponível. Tente novamente.'});else res.end()}
 }
}
