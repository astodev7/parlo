import {test} from 'node:test';import assert from 'node:assert/strict';import vm from 'node:vm';import {readFile} from 'node:fs/promises';
function context(){const input={value:'',classList:{toggle(){}},style:{},dataset:{}};const c={console,Date,Math,JSON,structuredClone,URL,Blob,setInterval(){},setTimeout(){},clearTimeout(){},addEventListener(){},scrollTo(){},location:{hash:'#/'},navigator:{onLine:true},window:{},document:{getElementById:()=>input,addEventListener(){},documentElement:{dataset:{}},visibilityState:'visible'},indexedDB:{open(){throw Error('not available in unit test')}},matchMedia:()=>({matches:true})};return vm.createContext(c)}
test('All bilingual lessons generate valid, completable sessions and preserve old keys',async()=>{const c=context();for(const name of ['progress-validator.cjs','english.js','courses.js','learning.js','app.js']){let src=await readFile(new URL('../public/'+name,import.meta.url),'utf8');if(name==='app.js')src=src.replace(/\nboot\(\);\s*$/,'');vm.runInContext(src,c,{filename:name})}vm.runInContext(`
render=()=>{};
for(const lang of ['it','en']){
 setCourse(lang);S=DEF();S.p.on=1;
 if(U.length!==12||V.length!==216)throw Error('Course count '+lang);
 if(U[0].l[0].k!=='0-0'||U[5].l[2].k!=='5-2')throw Error('Legacy keys');
 for(const l of U.flatMap(u=>u.l)){
  if(l.dialogue.length!==4||!l.task.o.length||!l.goal||l.w.length!==6)throw Error('Incomplete lesson '+lang+l.k);
  startLesson(l.k);S.sess.intro=1;
  if(!validateProgress(S))throw Error('Invalid initial state '+lang+l.k);
  while(S.sess){const e=S.sess.ex[S.sess.i];st={};if(e.t==='order')st.pick=e.a.split(' ');else if(e.t==='type'){st.ti=e.a;document.getElementById('ti').value=e.a}else if(e.t==='match')st.m={d:e.ps.map(x=>x.pt),l:null,x:0,bad:[]};else st.sel=e.a;check();if(!st.res.ok)throw Error('Expected answer rejected '+lang+l.k+e.t);if(!st.res.explanation)throw Error('Missing explanation');if(!validateProgress(S))throw Error('Invalid graded state '+lang+l.k+e.t);const score=S.sess.ok;check();if(S.sess.ok!==score)throw Error('Double scoring');next()}
  if(!S.done[l.k]||!validateProgress(S))throw Error('Invalid completed state '+lang+l.k);
 }
 if(Object.keys(S.done).length!==36)throw Error('Completed count');
}
S=DEF();S.p.on=1;startPlace();if(S.sess.ex.length!==24||!validateProgress(S))throw Error('Expanded placement');while(S.sess){const e=S.sess.ex[S.sess.i];st={};if(e.t==='type'){st.ti=e.a;document.getElementById('ti').value=e.a}else st.sel=e.a;check();next()}if(!validateProgress(S)||S.last.su!==11)throw Error('Placement result');
setCourse('en');if(!grade('I am Brazilian',"I'm Brazilian",equivalents("I'm Brazilian",'en')).ok)throw Error('Contraction');if(grade('I have hungry','I am hungry',[]).ok)throw Error('Wrong phrase accepted');const e=mkEx(V.find(x=>x.it==='I am hungry'),'type');if(!explainAnswer(e,'I have hungry',{ok:0}).includes('to be'))throw Error('Specific feedback');
setCourse('it');if(!grade('Io sono stanco','Sono stanco',equivalents('Sono stanco','it')).ok)throw Error('Subject omission');if(grade('e','è',[]).ok)throw Error('Accent difference');
S=DEF();S.p.on=1;startLesson('6-0');S.sess.intro=1;st={sel:'resposta incorreta'};check();if(S.learning.topics.directions.misses!==1)throw Error('Topic tracking');if(!validateProgress(S))throw Error('Error state');S.sess=null;startTargeted('directions');if(S.sess.practiceTopic!=='directions'||!S.sess.ex.some(e=>e.t==='context'))throw Error('Targeted review');
`,c);assert.ok(true)});
