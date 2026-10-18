function validateProgress(s){
 if(!s||typeof s!=='object'||Array.isArray(s)||s.v!==1)return false;
 if(!s.p||typeof s.p!=='object'||!['days','done','srs','fav','acc'].every(k=>s[k]&&typeof s[k]==='object'&&!Array.isArray(s[k])))return false;
 if(!Number.isFinite(s.xp)||s.xp<0||s.xp>1e9||![5,10,15,20].includes(s.p.min))return false;
 if(typeof s.p.name!=='string'||s.p.name.length>80||!['auto','dark','light'].includes(s.p.theme))return false;
 if(![0,1].includes(s.p.on)||![0,1].includes(s.p.snd)||![0,1].includes(s.p.rm))return false;
 const dangerous=(v,depth=0)=>{if(depth>15)return true;if(v&&typeof v==='object')return Object.keys(v).some(k=>['__proto__','constructor','prototype'].includes(k)||dangerous(v[k],depth+1));return false};
 if(dangerous(s))return false;
 if(!Object.entries(s.done).every(([k,n])=>/^[0-5]-[0-2]$/.test(k)&&Number.isInteger(n)&&n>=0))return false;
 if(!Object.entries(s.srs).every(([k,v])=>/^[0-5]-[0-2]-[0-5]$/.test(k)&&v&&Number.isInteger(v.b)&&v.b>=0&&v.b<=5&&Number.isFinite(v.due)))return false;
 if(!Object.entries(s.days).every(([k,v])=>/^\d{4}-\d{2}-\d{2}$/.test(k)&&v&&Number.isFinite(v.xp)&&v.xp>=0&&Number.isFinite(v.s)&&v.s>=0))return false;
 if(!Object.entries(s.fav).every(([k,v])=>/^[0-5]-[0-2]-[0-5]$/.test(k)&&[true,false,0,1].includes(v)))return false;
 if(!Object.entries(s.acc).every(([k,v])=>['choice','order','type','listen','cloze','match'].includes(k)&&Array.isArray(v)&&v.length===2&&v.every(x=>Number.isInteger(x)&&x>=0)&&v[0]<=v[1]))return false;
 if(s.last!==null){const x=s.last;if(!x||!Number.isInteger(x.n)||x.n<1||x.n>20||!Number.isInteger(x.ok)||x.ok<0||x.ok>x.n)return false;if(x.pl){if(x.pl!==1||!Number.isInteger(x.su)||x.su<0||x.su>5)return false}else if(!(/^[0-5]-[0-2]$/.test(x.lk)||x.lk==='rev')||!Number.isInteger(x.xp)||x.xp<0||x.xp>200||!Number.isFinite(x.sec)||x.sec<0)return false}
 if(s.sess!==null){const x=s.sess;if(!x||!(/^[0-5]-[0-2]$/.test(x.lk)||['rev','nivel'].includes(x.lk))||!Array.isArray(x.ex)||!x.ex.length||x.ex.length>20||!Number.isInteger(x.i)||x.i<0||x.i>=x.ex.length||!Number.isFinite(x.sec)||x.sec<0||!Number.isFinite(x.ok)||x.ok<0||x.ok>x.ex.length)return false;if(!x.ex.every(e=>e&&['choice','order','type','listen','cloze','match'].includes(e.t)&&/^[0-5]-[0-2]-[0-5]$/.test(e.k)&&typeof e.q==='string'&&e.q.length<3000&&typeof e.a==='string'&&e.a.length<3000&&(!e.o||(Array.isArray(e.o)&&e.o.length<=8&&e.o.every(x=>typeof x==='string'&&x.length<1000)))&&(!e.w||(Array.isArray(e.w)&&e.w.length<=30&&e.w.every(x=>typeof x==='string'&&x.length<1000)))&&(!e.ps||(Array.isArray(e.ps)&&e.ps.length<=8&&e.ps.every(p=>p&&typeof p.it==='string'&&typeof p.pt==='string')))&&(!e.r||(Array.isArray(e.r)&&e.r.length<=8&&e.r.every(x=>typeof x==='string')))))return false}
 return true;
}

if(typeof module!=='undefined')module.exports={validateProgress};
