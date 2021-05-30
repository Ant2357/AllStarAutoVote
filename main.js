const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
  })

  const page = await browser.newPage();

  await page.goto('https://npb.jp/allstar/ballot/Login/index');
  await page.type("#MemberEmail", "xxxx@gmail.com");
  await page.type("#MemberPassword", "xxxx");
  await page.click('#MemberIndexForm > section.pageNav > ul > li > input');

})();
