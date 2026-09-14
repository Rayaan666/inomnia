import {chromium} from 'file:///C:/Users/rayaa/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright/index.mjs';
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:390,height:844}});await p.goto('http://127.0.0.1:1502/about',{waitUntil:'domcontentloaded'});console.log(JSON.stringify(await p.locator('.why-section').evaluate(e=>({rect:e.getBoundingClientRect().toJSON(),sw:e.scrollWidth,children:[...e.children].map(x=>({c:x.className,r:x.getBoundingClientRect().toJSON(),sw:x.scrollWidth}))}))));await b.close();

