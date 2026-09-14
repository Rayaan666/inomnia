import { chromium } from 'file:///C:/Users/rayaa/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright/index.mjs';
const browser = await chromium.launch({ headless: true });
const errors = [];
for (const [width, height, reducedMotion] of [[1870,870,'no-preference'],[1024,768,'no-preference'],[390,844,'no-preference'],[320,740,'no-preference'],[1440,900,'reduce']]) {
 const page = await browser.newPage({ viewport:{width,height}, reducedMotion });
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:1502/about',{waitUntil:'domcontentloaded'});
 const section = page.locator('.mv-section');
 await section.scrollIntoViewIfNeeded();
 await page.locator('.mv-image').scrollIntoViewIfNeeded();
 await page.waitForFunction(()=>getComputedStyle(document.querySelector('.mv-image')).clipPath === 'inset(0%)');
 await page.locator('.mv-image img').evaluate(img=>img.decode());
 const result = await section.evaluate(el=>({overflow:el.scrollWidth>el.clientWidth, clip:getComputedStyle(el.querySelector('.mv-image')).clipPath, loaded:el.querySelector('img').naturalWidth>0, imageHeight:el.querySelector('.mv-image').getBoundingClientRect().height}));
 if(result.overflow || !result.loaded || result.imageHeight < 400) throw new Error(JSON.stringify(result));
 console.log(JSON.stringify({width,reducedMotion,...result}));
 if(width===1870 || width===390) { await page.addStyleTag({content:'nav, .fixed { visibility: hidden !important; }'}); await section.screenshot({path:`.mission-vision-check/${width}.png`}); }
 await page.close();
}
if(errors.length) throw new Error(errors.join('\n'));
await browser.close();
