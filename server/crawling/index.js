
const waitFind = (locator) => {
  return driver.findElement(async () => {
    await driver.wait(until.elementLocated(locator));
    return driver.findElement(locator);
  });
}
/*
var webdriver = require('../../node_modules/selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
*/
/*
const {Builder, By, Key, until} = require('selenium-webdriver');
(async function Insta() {
  let driver = await new Builder().forBrowser('chrome').build();
  var request = require('request');

  try {
    await driver.get('https://www.instagram.com/?hl=ko');
    var LoginBtn = await driver.wait(until.elementLocated(By.xpath('//*[@id="react-root"]/section/main/article/div[2]/div[2]/p/a')));
    await LoginBtn.click();
    await driver.wait(until.titleIs('로그인 • Instagram'));

    var idInput = await driver.wait(until.elementLocated(By.name('username')));
    var pwInput = await driver.wait(until.elementLocated(By.name('password')));
    await idInput.sendKeys('ijj1792@naver.com')
    await pwInput.sendKeys('angks12')
    LoginBtn = await driver.wait(until.elementLocated(By.xpath('//*[@id="react-root"]/section/main/div/article/div/div[1]/div/form/div[4]/button/div')),1000);
    await LoginBtn.click();

    var LaterBtn = await driver.wait(until.elementLocated(By.className('aOOlW   HoLwm ')));
    await LaterBtn.click();

    var findInput = await driver.wait(until.elementLocated(By.className('XTCLo x3qfX')));
    await findInput.sendKeys('강남역 맛집', Key.RETURN);
    var keywordArray = []
    var tempVar
    for(var i=1; i < 5;i++) {
      
      tempVar = await driver.wait(until.elementLocated(By.xpath('//*[@id="react-root"]/section/nav/div[2]/div/div/div[2]/div[2]/div[2]/div/a['+i+']/div/div/div[1]/span')),1000)
      await tempVar.getText().then(text =>{
        console.log(text);
      })
    }
    
  } finally {
   //request("http://sjh836.tistory.com", function(err, res, body) { console.log(body); });
  }
})();
*/
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
const { Builder, By, Key, until } = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    let PBtn, tempA;
    await driver.get('https://map.naver.com/?query=%EC%84%9C%EC%9A%B8+%EC%A7%80%ED%95%98%EC%B2%A0+%EC%97%AD&type=SITE_1&queryRank=0');
    //tempA = await driver.wait(until.elementLocated(By.className('lsnx_det')));


    for (var ti = 1; ti < 6; ti++) {
      for (var i = 3; i < 8; i++) {
        tempA = await By.css('.lsnx_det dt > a');
        console.log('#####################'+i+'###########################')
        await driver.wait(until.elementsLocated(tempA));
        let whatTempA = driver.findElements(tempA);
        await whatTempA.then(async (elements) => {
          for (var property in elements) {
            elements[property].getText().then(text => {
              console.log(text)
            });
          }
          await elements.clear();
        });
        PBtn = await driver.wait(until.elementLocated(By.xpath('//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/*[' + i + ']')), 1100);
        await PBtn.click();
        
      }
    }


    /*
    for (var ti = 1; ti < 6; ti++) {
      for (var i = 3; i < 8; i++) {
        for (var t = 1; t < 11; t++) {
          tempA = await driver.wait(until.elementLocated(By.xpath('//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/ul/li[' + t + ']/div[1]/dl/dt/a')), 100);
          await tempA.getText().then(text => {
            console.log(text);
          }).catch(err => {
            console.log(err);
          })
        }
        PBtn = await driver.wait(until.elementLocated(By.xpath('//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/*[' + i + ']')), 1100);
        await PBtn.click();
      }
    }
    */


  } finally {
    //await driver.quit();
  }
})();


/*
var webdriver = require('../../node_modules/selenium-webdriver');
(async function example() {
  var driver = new webdriver.Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.instagram.com/?hl=ko');
    //var element = await driver.wait(webdriver.until.elementLocated(webdriver.By.name('q')));
    //await element.sendKeys('Cheese!', webdriver.Key.RETURN);
    await driver.getTitle().then(function (title) {
      console.log('Page title is: ' + title);
    });
    await driver.wait(webdriver.until.elementLocated(By.xpath('//*[@id="react-root"]/section/main/article/div[2]/div[2]/p/a'))).click();

  } finally {
//    await driver.quit();
  }
})();
*/

