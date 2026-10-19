import {test} from 'node:test';import assert from 'node:assert/strict';import vm from 'node:vm';import {readFile} from 'node:fs/promises';
function context(){const input={value:'',classList:{toggle(){},add(){},remove(){}},style:{},dataset:{}};const c={console,Date,Math,JSON,structuredClone,URL,Blob,setInterval(){},setTimeout(){},clearTimeout(){},addEventListener(){},scrollTo(){},location:{hash:'#/'},navigator:{onLine:true},window:{},document:{getElementById:()=>input,addEventListener(){},documentElement:{dataset:{}},visibilityState:'visible'},indexedDB:{open(){throw Error('not available in unit test')}},matchMedia:()=>({matches:true})};return vm.createContext(c)}
test('All bilingual lessons generate valid, completable sessions and preserve old keys',async()=>{const c=context();for(const name of ['progress-validator.cjs','english.js','courses.js','learning.js','vocabulary.js','app.js']){let src=await readFile(new URL('../public/'+name,import.meta.url),'utf8');if(name==='app.js')src=src.replace(/\nboot\(\);\s*$/,'');vm.runInContext(src,c,{filename:name})}vm.runInContext(`
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
for(const lang of ['en','it']){setCourse(lang);S=DEF();S.p.on=1;resetLexFilters();if(VOCABULARY[lang].length!==184||Object.keys(VK).length!==400)throw Error('Lexicon count');for(const item of VOCABULARY[lang]){if(!item.example||!item.examplePt||!item.pt)throw Error('Example missing');if(item.category==='slang'&&(!item.note||!item.region))throw Error('Usage missing');if(item.pair&&!VOCABULARY[lang].some(x=>x.pair===item.pair&&x.category!==item.category))throw Error('Formal pair missing');S.fav[item.k]=true;S.srs[item.k]={b:0,due:Date.now()-1}}if(!validateProgress(S))throw Error('Lexicon persistence');lexCategory='formal';if(lexMatches(lexItems()).length!==12)throw Error('Formal filter');lexCategory='daily';lexSub='Casa';if(lexMatches(lexItems()).length!==8)throw Error('Subtopic filter');lexCategory='verbs';lexSub='all';practiceLexSelection();if(S.sess.ex.length!==8||!validateProgress(S))throw Error('Lexical session');while(S.sess){const e=S.sess.ex[S.sess.i];st={};if(e.t==='type'){st.ti=e.a;document.getElementById('ti').value=e.a}else if(e.t==='order')st.pick=e.a.split(' ');else st.sel=e.a;check();next()}if(!validateProgress(S))throw Error('Lexical review completion');S.sess=null;startTargeted('plans');if(!S.sess||!validateProgress(S))throw Error('Targeted lexical review');}
setCourse('it');if(!grade('Io sono stanco','Sono stanco',equivalents('Sono stanco','it')).ok)throw Error('Subject omission');if(grade('e','è',[]).ok)throw Error('Accent difference');
S=DEF();S.p.on=1;startLesson('6-0');S.sess.intro=1;st={sel:'resposta incorreta'};check();if(S.learning.topics.directions.misses!==1)throw Error('Topic tracking');if(!validateProgress(S))throw Error('Error state');S.sess=null;startTargeted('directions');if(S.sess.practiceTopic!=='directions'||!S.sess.ex.some(e=>e.t==='context'))throw Error('Targeted review');
`,c);assert.ok(true)});
test('Visual course picker and combined vocabulary filters work in both languages',async()=>{
 const c=context();
 for(const name of ['progress-validator.cjs','english.js','courses.js','learning.js','vocabulary.js','app.js']){
  let src=await readFile(new URL('../public/'+name,import.meta.url),'utf8');
  if(name==='app.js')src=src.replace(/\nboot\(\);\s*$/,'');
  vm.runInContext(src,c,{filename:name});
 }
 vm.runInContext(`
 render=()=>{};
 for(const lang of ['it','en']){
  setCourse(lang);S=DEF();S.p.on=1;
  const picker=coursePicker();
  if(!picker.includes('MEUS CURSOS')||!picker.includes("selectCourse('en')")||!picker.includes('selected'))throw Error('Course menu');
  if(!courseFlag('en').includes('#304776')||!courseFlag('en').includes('#d74a53'))throw Error('US flag');
  chooseLexTopic('course');
  if(!lexFiltersOpen||lexActiveCount()!==1)throw Error('Topic selection');
  lexPickSub(0);
  if(lexMatches(lexItems()).length!==18||lexActiveCount()!==2)throw Error('Unit filter');
  const first=lexMatches(lexItems())[0];S.fav[first.k]=true;
  lexFilter('saved',true);
  if(lexMatches(lexItems()).length!==1)throw Error('Combined favorites');
  lexFilter('register','formal');
  if(lexMatches(lexItems()).length!==0)throw Error('Combined empty state');
  lexReset();
  if(lexMatches(lexItems()).length!==400||lexActiveCount()!==0)throw Error('Clear filters');
  chooseLexTopic('formal');lexFilter('register','formal');
  if(lexMatches(lexItems()).length!==12)throw Error('Formal filter');
  lexQuery=VOCABULARY[lang].find(x=>x.category==='formal').it;
  if(!lexMatches(lexItems()).length)throw Error('Search plus filters');
  const html=vocab();
  if(html.includes('<select')||!html.includes('filter-topic-grid')||!html.includes('filter-status'))throw Error('Visual filter HTML');
 }
 `,c);
});
test('Lesson repetition, bounded error retries, optional practice and review intervals survive resume',async()=>{
 const c=context();
 for(const name of ['progress-validator.cjs','english.js','courses.js','learning.js','vocabulary.js','app.js']){
  let src=await readFile(new URL('../public/'+name,import.meta.url),'utf8');if(name==='app.js')src=src.replace(/\nboot\(\);\s*$/,'');vm.runInContext(src,c,{filename:name});
 }
 vm.runInContext(`
 render=()=>{};
 function answerExercise(right=true){const e=S.sess.ex[S.sess.i];st={};if(e.t==='type')document.getElementById('ti').value=right?e.a:'resposta errada';else if(e.t==='order')st.pick=right?e.a.split(' '):['errado'];else st.sel=right?e.a:'resposta errada';check()}
 for(const lang of ['it','en']){
  setCourse(lang);S=DEF();S.p.on=1;startLesson('0-0');S.sess.intro=1;
  if(S.sess.ex.length!==23||S.sess.lessonMode!=='learn')throw Error('Expanded initial lesson');
  for(const word of U[0].l[0].w){if(S.sess.ex.filter(e=>e.k===word.k&&['discover','practice','recall'].includes(e.stage)).length!==3)throw Error('Every word repeated');if(!S.sess.ex.some(e=>e.k===word.k&&e.stage==='recall'&&e.t==='type'))throw Error('Recall missing')}
  const firstKey=S.sess.ex[0].k;answerExercise(false);
  if(S.sess.ex.length!==24||S.sess.ex[1].stage==='retry')throw Error('Delayed retry');
  const size=S.sess.ex.length;check();if(S.sess.ex.length!==size)throw Error('Double enqueue');
  S=JSON.parse(JSON.stringify(S));st=structuredClone(S.sess.feedback);if(!validateProgress(S))throw Error('Resume state');check();if(S.sess.ex.length!==size)throw Error('Reload duplicated retry');next();
  while(S.sess){answerExercise(true);if(!validateProgress(S))throw Error('Invalid graded lesson');next()}
  if(S.done['0-0']!==1||S.done['0-1'])throw Error('Unexpected advancement');
  if(S.last.xp>200||!validateProgress(S))throw Error('Result validation');
  if(S.srs[firstKey].b!==0||S.srs[firstKey].due>Date.now()+11*60000)throw Error('Error review delayed too far');
  const anotherKey=U[0].l[0].w[1].k;if(S.srs[anotherKey].b!==1||S.srs[anotherKey].due>Date.now()+DAY+1000)throw Error('Repetition falsely spaced');
  if(!fim().includes('Praticar mais:')||!fim().includes('Continuar:'))throw Error('Result actions missing');
  const before=S.srs[anotherKey].b;practiceMore('0-0');if(S.sess.lk!=='rev'||S.sess.lessonKey!=='0-0'||S.sess.ex.length!==17)throw Error('Extra practice scope');
  const ongoing=JSON.stringify(S.sess);practiceMore('0-1');if(JSON.stringify(S.sess)!==ongoing)throw Error('Active session overwritten');
  while(S.sess){answerExercise(true);if(!validateProgress(S))throw Error('Invalid practice');next()}
  if(S.done['0-0']!==1||S.done['0-1'])throw Error('Extra practice advanced course');
  if(S.srs[anotherKey].b!==before)throw Error('Same-day extra practice falsely spaced');
  S=DEF();S.p.on=1;startLesson('0-0');S.sess.intro=1;let attempts=0;
  while(S.sess){answerExercise(false);attempts++;if(S.sess.ex.length>32||!validateProgress(S))throw Error('Unbounded or invalid retries');next();if(attempts>32)throw Error('Infinite lesson')}
  if(attempts!==32||S.last.missedKeys.length<6||!fim().includes('Vamos fixar'))throw Error('Wrong-answer reinforcement');
  const invalid=structuredClone(S);invalid.last.lessonKey='99-9';if(validateProgress(invalid))throw Error('Invalid source accepted');
  // A saved v6 session still finishes with its original sequence.
  S=DEF();S.p.on=1;S.sess={lk:'0-0',ex:[mkEx(U[0].l[0].w[0],'choice')],i:0,ok:0,intro:1,sec:0,t:Date.now()};answerExercise(true);next();if(!S.done['0-0']||!validateProgress(S)||!fim().includes('Praticar mais:'))throw Error('Legacy compatibility');
 }
 `,c);
});
test('Listening modules and bilingual sentence workshops teach, hint, resume and save independently',async()=>{
 const c=context();for(const name of ['progress-validator.cjs','english.js','courses.js','learning.js','vocabulary.js','app.js']){let src=await readFile(new URL('../public/'+name,import.meta.url),'utf8');if(name==='app.js')src=src.replace(/\nboot\(\);\s*$/,'');vm.runInContext(src,c,{filename:name})}
 vm.runInContext(`
 render=()=>{};
 const spoken=[];
 speechSynthesis={getVoices:()=>[{lang:'en-US'},{lang:'it-IT'}],cancel(){},speak(u){spoken.push(u.text);if(u.onend)u.onend()}};
 window.speechSynthesis=speechSynthesis;SpeechSynthesisUtterance=function(text){this.text=text};
 for(const lang of ['it','en']){
  setCourse(lang);S=DEF();S.p.on=1;
  const module=lessonExercises(U[0].l[0]);if(module.filter(e=>e.t==='listen').length!==3||module.filter(e=>e.audioOrder).length!==2||module.filter(e=>e.t==='context').length!==2)throw Error('Listening mix');
  for(const lesson of U.flatMap(u=>u.l)){const items=lessonExercises(lesson);if(items.filter(e=>e.t==='order').length<Math.min(lesson.w.filter(w=>w.it.includes(' ')).length,2))throw Error('Too few ordering exercises')}
  const dialogue=module.find(e=>e.t==='dialogue');S.sess={lk:'rev',ex:[dialogue],i:0,ok:0,intro:1,sec:0,t:Date.now()};spoken.length=0;playCurrentDialogue();if(spoken.join('|')!==dialogue.ctx.map(x=>x.text).join('|'))throw Error('Wrong dialogue excerpt');
  S.sess.ex=[module.find(e=>e.audioOrder)];spoken.length=0;playOrderAudio();if(spoken[0]!==S.sess.ex[0].audioText)throw Error('Order audio mismatch');S.sess=null;
  if(SENTENCE_LESSONS[lang].length!==8)throw Error('Workshop count');
  for(const b of SENTENCE_LESSONS[lang]){
   if(b.rows.length!==6||!b.rule||!b.parts.length||!b.meaning)throw Error('Missing teaching content');
   startBuilder(b.id);if(S.sess.ex.length!==6||!validateProgress(S))throw Error('Builder session');
   const html=lessonView();if(st.pick.length!==1||!html.includes('tile'))throw Error('Guided beginning');
   builderHelp();if(!st.builderHelp.includes('próxima peça'))throw Error('Hint missing');addBuilderPiece();if(st.pick.length!==2)throw Error('Guided insertion');
   lessonView();const saved=JSON.stringify(S);S=JSON.parse(saved);st={};lessonView();if(st.pick.length!==2)throw Error('Draft not restored');
   const snapshot=JSON.stringify(S.sess);startBuilder(b.id==='identity'?'states':'identity');if(JSON.stringify(S.sess)!==snapshot)throw Error('Session replaced');
   let first=true;
   while(S.sess){const e=S.sess.ex[S.sess.i];st={pick:first?['errado']:e.a.split(' ')};first=false;check();if(!validateProgress(S))throw Error('Invalid workshop state');const count=S.sess.ex.length;check();if(S.sess.ex.length!==count)throw Error('Duplicate retry');next()}
   if(S.learning.builders[b.id].completed!==1||S.learning.builders[b.id].attempts!==7||S.last.builderKey!==b.id||!fim().includes('Escolher outra oficina'))throw Error('Workshop completion');
   if(Object.keys(S.done).length||Object.keys(S.srs).length)throw Error('Workshop advanced course vocabulary');
   if(!validateProgress(S))throw Error('Invalid workshop result');
  }
  S=DEF();S.p.on=1;startBuilder('identity');let tries=0;while(S.sess){st={pick:['errado']};check();tries++;if(!validateProgress(S))throw Error('Invalid retry state');next();if(tries>12)throw Error('Infinite workshop')}if(tries!==12)throw Error('Missing retries');
  const bad=structuredClone(S);bad.learning.builders.identity.completed=-1;if(validateProgress(bad))throw Error('Bad builder metadata accepted');
  S=DEF();S.p.on=1;startBuilder('routine');S.sess.builderDraft={i:0,pick:[123]};if(validateProgress(S))throw Error('Bad draft accepted');S.sess=null;
  window.speechSynthesis=undefined;delete window.speechSynthesis;if(lessonExercises(U[0].l[0]).some(e=>e.t==='listen'))throw Error('No-voice fallback');window.speechSynthesis=speechSynthesis;
 }
 `,c);
});
