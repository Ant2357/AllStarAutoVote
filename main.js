const puppeteer = require('puppeteer');
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
  });

  try {
    // NPBサイトのCookie
    const content = fs.readFileSync("cookie.json");
    const cookie = JSON.parse(content);

    const page = await browser.newPage();
    await page.setCookie(...cookie);

    await page.goto('https://npb.jp/allstar/ballot/members');
    await Promise.all([page.waitForNavigation(), page.click('#btnSubmit')]);
    await Promise.all([page.waitForNavigation(), page.click('#btnSubmit')]);
  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
})();
