var moduleCrawl = require('./util/custom');
/*
const mysql = require('mysql');
const fs = require('fs');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({

  host: conf.host,

  user: conf.user,

  password: conf.password,

  port: conf.port,

  database: conf.database

});
connection.connect();
*/
(async function Insta() {
  const { Builder, By, Key, until } = require('selenium-webdriver');
  let driver = await new Builder().forBrowser('chrome').build();
  var request = require('request');
  var cheerio = require('cheerio');
  var $
  var instaBox,iCnt
  try {
    await driver.get('https://www.instagram.com/?hl=ko');
    var LoginBtn = await driver.wait(until.elementLocated(By.xpath('//*[@id="react-root"]/section/main/article/div[2]/div[2]/p/a')));
    await LoginBtn.click();
    await driver.wait(until.titleIs('로그인 • Instagram'));

    var idInput = await driver.wait(until.elementLocated(By.name('username')));
    var pwInput = await driver.wait(until.elementLocated(By.name('password')));
    await idInput.sendKeys('ijj1792@naver.com')
    await pwInput.sendKeys('angks12')
    LoginBtn = await driver.wait(until.elementLocated(By.xpath('//*[@id="react-root"]/section/main/div/article/div/div[1]/div/form/div[4]/button/div')), 1000);
    await LoginBtn.click();

    var LaterBtn = await driver.wait(until.elementLocated(By.className('aOOlW   HoLwm ')));
    await LaterBtn.click();

    var findInput = await driver.wait(until.elementLocated(By.className('XTCLo x3qfX')));
    await findInput.sendKeys('강남역 맛집', Key.RETURN);
    var keywordArray = []
    var tempVar

    tempVar = await driver.wait(until.elementLocated(By.xpath('//*[@id="react-root"]/section/nav/div[2]/div/div/div[2]/div[2]/div[2]/div/a[1]/div/div/div[1]/span')), 1000)
    await tempVar.click();
    for (var cCnt = 1; cCnt < 10; cCnt++) {
      if(cCnt > 1) {
        iCnt = 11;
      } else {
        iCnt = 1;
      }
      for (iCnt; iCnt < 14; iCnt++) {
        for (var tCnt = 1; tCnt < 4; tCnt++) {
          instaBox = await moduleCrawl.webElementLocated({ By, Key, until, driver }, 'css', '#react-root > section > main > article > div:nth-child(3) > div > div:nth-child(' + iCnt + ') > div:nth-child(' + tCnt + ') > a > div.eLAPa > div._9AhH0', false);
          await instaBox.click();
          var ckWGn = await moduleCrawl.webElementLocated({ By, Key, until, driver }, 'css', '.ckWGn', false);
          var tagEle = await moduleCrawl.webElementLocated({ By, Key, until, driver }, 'css', '.C4VMK span', false);
          await tagEle.getAttribute('innerHTML').then(async (html) => {
            $ = await cheerio.load(html);
            //for (const item of $('a').text().split('#')) {
            //  console.log(item);
            //}
            console.log($('a').text());
            driver.sleep(1000);
            console.log(iCnt + '------------------------------' + tCnt);
          }
          )
          await ckWGn.click();
          driver.sleep(3000);
        }
      }
    }
  } finally {

  }
})();


