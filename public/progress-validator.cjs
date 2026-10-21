function validateProgress(s){
 if(!s||typeof s!=='object'||Array.isArray(s)||s.v!==1)return false;
 if(!s.p||typeof s.p!=='object'||!['days','done','srs','fav','acc'].every(k=>s[k]&&typeof s[k]==='object'&&!Array.isArray(s[k])))return false;
 if(!Number.isFinite(s.xp)||s.xp<0||s.xp>1e9||![5,10,15,20].includes(s.p.min))return false;
 if(typeof s.p.name!=='string'||s.p.name.length>80||!['auto','dark','light'].includes(s.p.theme))return false;
 if(![0,1].includes(s.p.on)||![0,1].includes(s.p.snd)||![0,1].includes(s.p.rm))return false;
 const dangerous=(v,depth=0)=>{if(depth>15)return true;if(v&&typeof v==='object')return Object.keys(v).some(k=>['__proto__','constructor','prototype'].includes(k)||dangerous(v[k],depth+1));return false};
 if(dangerous(s))return false;
 if(!Object.entries(s.done).every(([k,n])=>/^(?:[0-9]|1[01])-[0-2]$/.test(k)&&Number.isInteger(n)&&n>=0))return false;
 if(!Object.entries(s.srs).every(([k,v])=>/^(?:(?:[0-9]|1[01])-[0-2]-[0-5]|lex-[a-f0-9]{12})$/.test(k)&&v&&Number.isInteger(v.b)&&v.b>=0&&v.b<=5&&Number.isFinite(v.due)))return false;
 if(!Object.entries(s.days).every(([k,v])=>/^\d{4}-\d{2}-\d{2}$/.test(k)&&v&&Number.isFinite(v.xp)&&v.xp>=0&&Number.isFinite(v.s)&&v.s>=0))return false;
 if(!Object.entries(s.fav).every(([k,v])=>/^(?:(?:[0-9]|1[01])-[0-2]-[0-5]|lex-[a-f0-9]{12})$/.test(k)&&[true,false,0,1].includes(v)))return false;
 if(!Object.entries(s.acc).every(([k,v])=>['choice','order','type','listen','cloze','match','dialogue','context'].includes(k)&&Array.isArray(v)&&v.length===2&&v.every(x=>Number.isInteger(x)&&x>=0)&&v[0]<=v[1]))return false;
 if(s.last!==null){const x=s.last;if(!x||!Number.isInteger(x.n)||x.n<1||x.n>32||!Number.isInteger(x.ok)||x.ok<0||x.ok>x.n)return false;if(x.pl){if(x.pl!==1||!Number.isInteger(x.su)||x.su<0||x.su>11)return false}else if(!(/^(?:[0-9]|1[01])-[0-2]$/.test(x.lk)||x.lk==='rev')||!Number.isInteger(x.xp)||x.xp<0||x.xp>200||!Number.isFinite(x.sec)||x.sec<0)return false}
 if(s.sess!==null){const x=s.sess;if(!x||!(/^(?:[0-9]|1[01])-[0-2]$/.test(x.lk)||['rev','nivel'].includes(x.lk))||!Array.isArray(x.ex)||!x.ex.length||x.ex.length>32||!Number.isInteger(x.i)||x.i<0||x.i>=x.ex.length||!Number.isFinite(x.sec)||x.sec<0||!Number.isFinite(x.ok)||x.ok<0||x.ok>x.ex.length)return false;if(!x.ex.every(e=>e&&['choice','order','type','listen','cloze','match','dialogue','context'].includes(e.t)&&/^(?:(?:[0-9]|1[01])-[0-2]-[0-5]|lex-[a-f0-9]{12})$/.test(e.k)&&typeof e.q==='string'&&e.q.length<3000&&typeof e.a==='string'&&e.a.length<3000&&(!e.o||(Array.isArray(e.o)&&e.o.length<=8&&e.o.every(x=>typeof x==='string'&&x.length<1000)))&&(!e.w||(Array.isArray(e.w)&&e.w.length<=30&&e.w.every(x=>typeof x==='string'&&x.length<1000)))&&(!e.ps||(Array.isArray(e.ps)&&e.ps.length<=8&&e.ps.every(p=>p&&typeof p.it==='string'&&typeof p.pt==='string')))&&(!e.r||(Array.isArray(e.r)&&e.r.length<=8&&e.r.every(x=>typeof x==='string')))))return false}
 const topics=['greetings','identity','states','articles','requests','present','directions','shopping','routine','plans','problems','past-plans'];
 if(s.learning!==undefined){const data=s.learning;if(!data||!data.topics||typeof data.topics!=='object'||Array.isArray(data.topics)||!Array.isArray(data.mistakes)||data.mistakes.length>40)return false;if(!Object.entries(data.topics).every(([key,t])=>topics.includes(key)&&t&&['attempts','correct','misses','streak','last'].every(k=>Number.isFinite(t[k])&&t[k]>=0)&&Number.isInteger(t.attempts)&&t.correct+t.misses===t.attempts&&t.streak<=t.correct))return false;if(!data.mistakes.every(m=>m&&/^(?:(?:[0-9]|1[01])-[0-2]-[0-5]|lex-[a-f0-9]{12})$/.test(m.key)&&topics.includes(m.topic)&&['choice','order','type','listen','cloze','match','dialogue','context'].includes(m.type)&&typeof m.answer==='string'&&m.answer.length<=200&&typeof m.expected==='string'&&m.expected.length<=300&&Number.isFinite(m.at)&&m.at>=0))return false}
 if(s.sess){if(s.sess.practiceTopic!==undefined&&!topics.includes(s.sess.practiceTopic))return false;for(const e of s.sess.ex){if(e.topic!==undefined&&!topics.includes(e.topic))return false;if(e.alt!==undefined&&(!Array.isArray(e.alt)||e.alt.length>15||!e.alt.every(x=>typeof x==='string'&&x.length<1000)))return false;if(e.ctx!==undefined&&(!Array.isArray(e.ctx)||e.ctx.length>10||!e.ctx.every(x=>x&&['speaker','text','pt'].every(k=>typeof x[k]==='string'&&x[k].length<1000))))return false}}
 const lessonKey=k=>typeof k==='string'&&/^(?:[0-9]|1[01])-[0-2]$/.test(k);
 const wordKey=k=>typeof k==='string'&&/^(?:(?:[0-9]|1[01])-[0-2]-[0-5]|lex-[a-f0-9]{12})$/.test(k);
 const keyList=x=>Array.isArray(x)&&x.length<=32&&new Set(x).size===x.length&&x.every(wordKey);
 for(const x of [s.sess,s.last])if(x&&(x.lessonMode!==undefined||x.lessonKey!==undefined)){
  if(!['learn','extra'].includes(x.lessonMode)||!lessonKey(x.lessonKey)||!keyList(x.missedKeys))return false;
  if(x.lessonMode==='learn'&&x.lk!==x.lessonKey||x.lessonMode==='extra'&&x.lk!=='rev')return false;
 }
 if(!Object.values(s.srs).every(v=>v.reviewedAt===undefined||Number.isFinite(v.reviewedAt)&&v.reviewedAt>=0))return false;
 if(s.sess){
  if(s.sess.srsSeen!==undefined&&!keyList(s.sess.srsSeen))return false;
  if(!s.sess.ex.every(e=>e.stage===undefined||['discover','practice','recall','use','retry','listen'].includes(e.stage)))return false;
 }
 const builders=['identity','states','routine','negative','questions','requests','location','plans'];
 if(s.learning?.builders!==undefined){const b=s.learning.builders;if(!b||typeof b!=='object'||Array.isArray(b)||!Object.entries(b).every(([key,v])=>builders.includes(key)&&v&&Number.isInteger(v.completed)&&v.completed>=0&&Number.isInteger(v.attempts)&&v.attempts>=0&&Number.isInteger(v.correct)&&v.correct>=0&&v.correct<=v.attempts&&Number.isFinite(v.last)&&v.last>=0))return false}
 for(const x of [s.sess,s.last])if(x?.builderKey!==undefined&&(!builders.includes(x.builderKey)||x.lk!=='rev'||x.lessonMode!==undefined))return false;
 if(s.sess){
  const x=s.sess;if(x.builderDraft!==undefined&&(!x.builderKey||!x.builderDraft||!Number.isInteger(x.builderDraft.i)||x.builderDraft.i<0||x.builderDraft.i>=x.ex.length||!Array.isArray(x.builderDraft.pick)||x.builderDraft.pick.length>30||!x.builderDraft.pick.every(w=>typeof w==='string'&&w.length<1000)))return false;
  if(!x.ex.every(e=>(e.buildIndex===undefined||x.builderKey&&Number.isInteger(e.buildIndex)&&e.buildIndex>=0&&e.buildIndex<6&&e.t==='order')&&(e.audioOrder===undefined||typeof e.audioOrder==='boolean'&&e.t==='order'&&typeof e.audioText==='string'&&e.audioText.length>0&&e.audioText.length<1000)))return false;
 }
 const grammarKeys=['greetings','identity','states','articles','present','negative','questions','requests','location','routine','shopping','plans','problems','past'];
 if(s.learning?.grammar!==undefined){const g=s.learning.grammar;if(!g||typeof g!=='object'||Array.isArray(g)||!Object.entries(g).every(([key,v])=>grammarKeys.includes(key)&&v&&[0,1].includes(v.read)&&[0,1].includes(v.passed)&&[0,1].includes(v.needsReview)&&(!v.passed||v.read===1)&&Number.isInteger(v.attempts)&&v.attempts>=0&&Number.isInteger(v.best)&&v.best>=0&&v.best<=6&&Number.isInteger(v.score)&&v.score>=0&&v.score<=6&&v.score<=v.best&&Number.isFinite(v.last)&&v.last>=0&&Number.isFinite(v.due)&&v.due>=0))return false}
 for(const x of [s.sess,s.last])if(x){
  if(x.grammarKey!==undefined&&(!grammarKeys.includes(x.grammarKey)||x.lk!=='rev'||x.lessonMode!==undefined||x.builderKey!==undefined))return false;
  if(x.returnLesson!==undefined&&(!x.grammarKey||!lessonKey(x.returnLesson)))return false;
  if(x.returnBuilder!==undefined&&(!x.grammarKey||!builders.includes(x.returnBuilder)))return false;
 }
 if(s.sess?.grammarKey){const x=s.sess;if(x.ex.length!==6||!Array.isArray(x.grammarResults)||x.grammarResults.length>6||!x.grammarResults.every(n=>[0,1].includes(n))||x.grammarResults.reduce((a,b)=>a+b,0)!==x.ok||!x.ex.every((e,i)=>e.grammarIndex===i&&(i<4?e.t==='cloze':e.t==='order')))return false}
 if(s.last?.grammarKey&&(![0,1].includes(s.last.grammarPassed)||s.last.n!==6))return false;
 if(s.pausedSessions!==undefined){
  const paused=s.pausedSessions;if(!paused||typeof paused!=='object'||Array.isArray(paused)||Object.keys(paused).length>8)return false;
  const core={...s};delete core.pausedSessions;
  for(const [key,session] of Object.entries(paused))if(!/^[a-z0-9:-]{1,80}$/.test(key)||!session||!validateProgress({...core,sess:session,last:null}))return false;
 }
 if(s.sess?.uiDraft!==undefined){const d=s.sess.uiDraft;if(!d||typeof d!=='object'||Array.isArray(d))return false;if(d.pick!==undefined&&(!Array.isArray(d.pick)||d.pick.length>30||!d.pick.every(w=>typeof w==='string'&&w.length<1000)))return false;if(d.ti!==undefined&&(typeof d.ti!=='string'||d.ti.length>3000))return false;if(d.sel!==undefined&&(typeof d.sel!=='string'||d.sel.length>3000))return false}
 return true;
}

if(typeof module!=='undefined')module.exports={validateProgress};
