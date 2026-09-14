import { chromium } from 'file:///C:/Users/rayaa/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright/index.mjs';
const browser = await chromium.launch({ headless: true });
try {
  for (const width of [1728, 1440, 1200, 1024, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    await page.goto('http://127.0.0.1:1503/about', { waitUntil: 'networkidle' });
    const section = page.locator('.mv-section');
    await section.scrollIntoViewIfNeeded();
    await page.addStyleTag({ content: 'header, nav, .fixed { visibility:hidden!important } .mv-section * { opacity:1!important; transform:none!important }' });
    await page.locator('.mv-image img').evaluate(img => img.decode());
    const result = await section.evaluate(el => ({ width: el.clientWidth, overflow: el.scrollWidth > el.clientWidth, panels: [...el.querySelectorAll('.mv-panel')].map(panel => ({ overflow: panel.scrollWidth > panel.clientWidth, bottom: panel.querySelector('.mv-folio').getBoundingClientRect().bottom - el.getBoundingClientRect().top })), height: el.clientHeight }));
    if (result.overflow || result.panels.some(p => p.overflow || p.bottom > result.height)) throw Error(JSON.stringify(result));
    console.log(JSON.stringify(result));
    await section.screenshot({ path: `.mission-vision-check/fixed-${width}.png` });
    await page.close();
  }
} finally { await browser.close(); }
