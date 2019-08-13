
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
  let subPageArray = [3,4,5,6,7];
  let MainPageArray = [1,2,3];
  let SubWayName = [];
  let t = 0;
  
  (async function example() {
    const { Builder, By, Key, until } = require('selenium-webdriver');
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://map.naver.com/?query=%EC%84%9C%EC%9A%B8+%EC%A7%80%ED%95%98%EC%B2%A0+%EC%97%AD&type=SITE_1&queryRank=0');
      await toMainPage({By, Key, until, driver});
  
    } finally {
      console.log(SubWayName);
    }
  })();
  async function toMainPage(Tools) {
    for(const item of MainPageArray) {
        await toSubPage(Tools);
    }
  }
  
  async function toSubPage(Tools) {
    for(const item of subPageArray) {
      await Locate(Tools,item);
    }
    return  new Promise((resolve)=>{
      resolve('success');
    })
  }
  
  async function Locate(Tools,i) {  
    let PBtn;
  
    if( i%7 === 0 ) t += 1;
    let NextpageNum
    await thisPage(i,t).then(page=>{NextpageNum = page});
    await Tools.driver.wait(Tools.until.elementsLocated(Tools.By.css('.lsnx_det dt > a'))).then(async element=> {
      for(const item of element) {
        await item.getText().then(text=>SubWayName.push(text.split(" ")[0]));
      }
    }).catch(err=>{
      console.log('err1');
    });
  
    PBtn = await Tools.driver.wait(Tools.until.elementLocated(Tools.By.xpath('//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/*[' + i + ']')));
    await PBtn.click();
    await Tools.driver.sleep(700).then(
      await Tools.driver.wait(Tools.until.elementsLocated(Tools.By.xpath('//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/strong')),1500).then(async element=>{
        await Tools.driver.wait(Tools.until.elementTextIs(element[0],String(NextpageNum)),1000);
      }).catch(err=>{
        console.log('err2');
      })
    )
  
    return  new Promise(resolve=>{
      resolve('Success');
    }) ;
  }
  
  function thisPage(i,t){
    return  new Promise(resolve=>{
      if(i%7===0) {
        resolve( (i+( (t-1)*5 ))-1 );
      } else {
        resolve( (i+(t*5))-1 );
      }
      
    });
  }
  
  function console_(text){
    return new Promise(resolve=>{
      resolve(text);
    })
  }
  
  /*
  async function toMainPage(Tools) {
    const promises = MainPageArray.map(async ()=> {
      await toSubPage(Tools);
    })
    await Promise.all(promises);
    await console.log("Done!");
  }
  
  async function toSubPage(Tools) {
    const promisess = subPageArray.map(async item=>{
      await Locate(Tools,item);
    })
    await Promise.all(promisess);
    await console.log('middle done!');
    return  new Promise((resolve)=>{
      resolve('success');
    })
  }
  
  async function Locate(Tools,i) {  
    let PBtn;
    
    await Tools.driver.wait(Tools.until.elementsLocated(Tools.By.css('.lsnx_det dt > a')),1000);
    let whatTempA = Tools.driver.findElements(Tools.By.css('.lsnx_det dt > a'));
    //whatTempA.then(elements => {
    //  elements.forEach(element => {
    //    element.getText().then( text => {
    //        console.log(text)
    //    }).catch(err=>{
    //      
    //    });
    //  });
    //});
    PBtn = await Tools.driver.wait(Tools.until.elementLocated(Tools.By.xpath('//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/*[' + i + ']')), 2000);
    await PBtn.click();
  
    return  new Promise(resolve=>{
      resolve('Success');
    }) ;
  }
  */
  
  
  
  
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
  
  