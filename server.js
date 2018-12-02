// import puppeteer เข้ามา
const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // await this.page.setViewport({width: 1920, height: 1080});
  await page.goto('https://heutron.com/yc', {waitUntil: 'networkidle2'});
  await Promise.all([
    page.click('.administered_litigation .racer_forgotten:nth-child(3) .content_information>div'),
    page.waitForNavigation({waitUntil: 'networkidle2'}),
  ]);
  page.waitFor(10000)
  // await Promise.all([
  //   page.click('.administered_litigation .racer_forgotten:nth-child(4) .content_information>div'),
  //   page.waitForNavigation({waitUntil: 'networkidle2'}),
  // ]);
  // // Wait for suggest overlay to appear and click "show all results".
  // const allResultsSelector = 'const allResultsSelector = 'div.odor_excite .kite_molecule .walnut_expiry>div';';
  // await page.waitForSelector(allResultsSelector);
  // await page.click(allResultsSelector);

  // // Wait for the results page to load and display the results.
  // const resultsSelector = '.gsc-results .gsc-thumbnail-inside a.gs-title';
  // await page.waitForSelector(resultsSelector);

  // // Extract the results from the page.
  // const links = await page.evaluate(resultsSelector => {
  //   const anchors = Array.from(document.querySelectorAll(resultsSelector));
  //   return anchors.map(anchor => {
  //     const title = anchor.textContent.split('|')[0].trim();
  //     return `${title} - ${anchor.href}`;
  //   });
  // }, resultsSelector);
  // console.log(links.join('\n'));

  await browser.close();
})();