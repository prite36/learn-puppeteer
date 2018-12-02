// import puppeteer เข้ามา
const puppeteer = require('puppeteer');

(async () => {
  // เปิด Browser ขึ้นมา
  const browser = await puppeteer.launch({headless: false});
  // เปิด page ขึ้นมา
  const page = await browser.newPage();
  // เข้าเว็บซักเว็บนึง
  await page.goto('https://www.kapook.com');
  
  // ถ้าจะกรอกอะไรก่อนหรือ กดอะไรก่อนก็ทำตรงนี้
  // page.focus('#search')
  // page.type('Hello')
  // page.click('#search_btn')
  
  const dimensions = await page.evaluate(() => {
    // code ส่วนนี้จะถูกรันบนหน้าเพจ เหมือนเราไปพิมพ์ใน console 
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });
  // ปิด Browser 
//   await browser.close();
})();