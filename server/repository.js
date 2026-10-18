import pg from 'pg';
import {readFileSync} from 'node:fs';
export function connect(){
 if(!process.env.DATABASE_URL)throw new Error('Configure DATABASE_URL no arquivo .env.');
 const options={connectionString:process.env.DATABASE_URL,max:5,idleTimeoutMillis:20000,connectionTimeoutMillis:30000};
 if(process.env.PG_CA_FILE)options.ssl={ca:readFileSync(process.env.PG_CA_FILE,'utf8'),rejectUnauthorized:true};
 return new pg.Pool(options);
}
export function repository(pool){return {
 async createUser(user){const r=await pool.query('INSERT INTO parlo_users(id,email,name,password_hash,preferred_language) VALUES($1,$2,$3,$4,$5) RETURNING id,email,name,preferred_language',[user.id,user.email,user.name,user.password_hash,user.preferred_language]);return r.rows[0]},
 async hitLimit(key,max){const r=await pool.query(`INSERT INTO parlo_rate_limits(key_hash,attempts,expires_at) VALUES($1,1,now()+interval '15 minutes') ON CONFLICT(key_hash) DO UPDATE SET attempts=CASE WHEN parlo_rate_limits.expires_at<now() THEN 1 ELSE parlo_rate_limits.attempts+1 END,expires_at=CASE WHEN parlo_rate_limits.expires_at<now() THEN now()+interval '15 minutes' ELSE parlo_rate_limits.expires_at END RETURNING attempts`,[key]);return r.rows[0].attempts>max},
 async setLanguage(id,language){await pool.query('UPDATE parlo_users SET preferred_language=$2 WHERE id=$1',[id,language])},
 async findUser(email){return (await pool.query('SELECT id,email,name,password_hash,preferred_language FROM parlo_users WHERE email=$1',[email])).rows[0]},
 async createSession(hash,id,expiry){await pool.query('DELETE FROM parlo_sessions WHERE expires_at < now()');await pool.query('DELETE FROM parlo_rate_limits WHERE expires_at < now()');await pool.query('INSERT INTO parlo_sessions(token_hash,user_id,expires_at) VALUES($1,$2,$3)',[hash,id,expiry])},
 async getSession(hash){return (await pool.query('SELECT u.id,u.email,u.name,u.preferred_language FROM parlo_sessions s JOIN parlo_users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.expires_at>now()',[hash])).rows[0]},
 async deleteSession(hash){await pool.query('DELETE FROM parlo_sessions WHERE token_hash=$1',[hash])},
 async getProgress(id,lang){const r=await pool.query('SELECT state,revision FROM parlo_progress WHERE user_id=$1 AND language=$2',[id,lang]);return r.rows[0]||{state:null,revision:0}},
 async putProgress(id,lang,state,revision){
  const r=revision===0?await pool.query('INSERT INTO parlo_progress(user_id,language,state) VALUES($1,$2,$3) ON CONFLICT(user_id,language) DO NOTHING RETURNING revision',[id,lang,state]):await pool.query('UPDATE parlo_progress SET state=$3,revision=revision+1,updated_at=now() WHERE user_id=$1 AND language=$2 AND revision=$4 RETURNING revision',[id,lang,state,revision]);
  return r.rows[0]?.revision??null;
 },
 async passwordHash(id){return (await pool.query('SELECT password_hash FROM parlo_users WHERE id=$1',[id])).rows[0]?.password_hash},
 async changePassword(id,hash){const client=await pool.connect();try{await client.query('BEGIN');await client.query('UPDATE parlo_users SET password_hash=$2 WHERE id=$1',[id,hash]);await client.query('DELETE FROM parlo_sessions WHERE user_id=$1',[id]);await client.query('COMMIT')}catch(e){await client.query('ROLLBACK');throw e}finally{client.release()}}
}}
