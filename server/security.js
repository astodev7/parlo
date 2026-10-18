import {scrypt,randomBytes,timingSafeEqual,createHash} from 'node:crypto';
import {promisify} from 'node:util';
const derive=promisify(scrypt);
export async function hashPassword(password){const salt=randomBytes(16).toString('hex');const key=await derive(password,salt,64,{N:32768,r:8,p:1,maxmem:64*1024*1024});return `scrypt$${salt}$${key.toString('hex')}`}
export async function verifyPassword(password,stored){const [kind,salt,hex]=String(stored).split('$');if(kind!=='scrypt'||!salt||!/^[a-f0-9]{128}$/.test(hex||''))return false;const a=Buffer.from(hex,'hex'),b=await derive(password,salt,64,{N:32768,r:8,p:1,maxmem:64*1024*1024});return timingSafeEqual(a,b)}
export const tokenHash=t=>createHash('sha256').update(t).digest('hex');
export const newToken=()=>randomBytes(32).toString('hex');
export function validPassword(p){return typeof p==='string'&&p.length>=8&&p.length<=128}
export {validateProgress as validState} from '../public/progress-validator.cjs';
