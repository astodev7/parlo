import {createServer} from 'node:http';
import {connect,repository} from './repository.js';
import {createApp} from './app.js';
const production=process.env.NODE_ENV==='production',siteURL=process.env.SITE_URL||'http://localhost:3000';
if(production&&!siteURL.startsWith('https://'))throw Error('Use SITE_URL com HTTPS em produção.');
const pool=connect();await pool.query('SELECT id FROM parlo_users LIMIT 1');
const server=createServer(createApp(repository(pool),{siteURL,production}));server.requestTimeout=20000;server.headersTimeout=15000;
server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('PARLO disponível em '+siteURL));
async function stop(){server.close();await pool.end();process.exit(0)}process.on('SIGTERM',stop);process.on('SIGINT',stop);
