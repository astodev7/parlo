import {connect,repository} from '../server/repository.js';
import {createApp} from '../server/app.js';
const siteURL=process.env.SITE_URL;
if(!siteURL?.startsWith('https://'))throw Error('Configure SITE_URL com o endereço HTTPS da aplicação.');
const handler=createApp(repository(connect()),{siteURL,production:true});
export default function(req,res){const url=new URL(req.url,'https://parlo.internal'),route=url.searchParams.get('route');if(route&&route.startsWith('/')&&!route.startsWith('//'))req.url=route;return handler(req,res)}
