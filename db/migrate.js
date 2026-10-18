import {readFile} from 'node:fs/promises';
import {connect} from '../server/repository.js';
const pool=connect();try{await pool.query(await readFile(new URL('./schema.sql',import.meta.url),'utf8'));console.log('Banco PARLO configurado.')}finally{await pool.end()}
