const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 938 })
  await page.goto('https://heutron.com/yc', {waitUntil: 'networkidle2'});
  // signIn
  await page.waitFor(3000)
  await page.waitForSelector('section > .glossary_cheers > .difficulty_individuals > .btn > span')
  await page.click('section > .glossary_cheers > .difficulty_individuals > .btn > span')
  await page.waitForSelector('.tab-pane > .exists_winding > div > .signin > #email')
  await page.type('#email', 'capred001@gmail.com')
  await page.type('#password', '1234567890')
  await page.waitForSelector('.tab-pane > .exists_winding > div > .signin > button')
  await page.click('.tab-pane > .exists_winding > div > .signin > button')

  // play
  await page.waitFor(3000)
  await page.waitForSelector('.racer_forgotten:nth-child(3) .content_information > div')
  await page.click('.racer_forgotten:nth-child(3) .content_information > div')
  await page.waitFor(5000)
  await page.waitForSelector('.racer_forgotten:nth-child(4) .content_information > div')
  await page.click('.racer_forgotten:nth-child(4) .content_information > div')
  await page.waitFor(5000)
  await page.waitForSelector('.racer_forgotten:nth-child(5) .content_information > div')
  await page.click('.racer_forgotten:nth-child(5) .content_information > div')
  await page.waitFor(5000)
  
  // await browser.close();
})()
