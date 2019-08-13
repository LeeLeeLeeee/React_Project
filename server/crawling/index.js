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
let subPageArray = [3,4,5,6,7];
let MainPageArray = [1,2,3];
let SubWayName = [];
let prevName = "";
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
  if( i%7 === 0 ) t += 1;
  let NextpageNum;
  let iCnt = 0;
  await moduleCrawl.thisPage(i,t).then(page=>{NextpageNum = page});

  /*
    await을 붙여주면 promise pending이 끝난 Element를 반환한다.
    즉 then을 쓸 수 없었다.
   */
    const SubwayElement = await moduleCrawl.webElementLocated(Tools,'css','.lsnx_det dt > a',true);
    for(const item of SubwayElement) {
      if(iCnt == 0) {
        item.getText().then(text=>prevName=text);
        iCnt++;
      }
      await item.getText().then(text=>SubWayName.push(text.split(" ")[0]));
    }
    const PBtn = await moduleCrawl.webElementLocated(Tools,'xpath','//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/*[' + i + ']',false);    
    await PBtn.click();
    let whileStatus = true
    let tCnt = 0
    while(whileStatus) {
      moduleCrawl.WaitPageReload(Tools,'xpath','//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/ul/li[1]/div[1]/dl/dt/a',prevName)
      .then(()=>{
        whileStatus = false;
      }).catch((err)=>{
          whileStatus = true;
      })
      await Tools.driver.sleep(10);
    }

      

    
    


  
/*
  Tools.driver.sleep(700).then(async ()=> {
    const MatchPage = await moduleCrawl.webElementLocated(Tools,'xpath','//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/*[' + i + ']',false);
    await Tools.driver.wait(Tools.until.elementTextIs(MatchPage,String(NextpageNum)),10000).then(()=>{
    });
  });
*/
  return  new Promise(resolve=>{
    resolve('Success');
  }) ;
}

  //await Tools.driver.sleep(700).then(
  //  await moduleCrawl.webElementLocated(Tools,'xpath','//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/*[' + i + ']',false).then(async element=>{
  //    await Tools.driver.wait(Tools.until.elementTextIs(element[0],String(NextpageNum)),1000);
  //  }).catch(err=>{
  //    console.log('err2');
  //  })
  //)    
  //const SubwayElement = moduleCrawl.webElementLocated(Tools,'css',".lsnx_det dt > a");
  //SubwayElement
  //  .then(async element=> {
  //      for(const item of element) {
  //        
  //          await item.getText().then(text=>SubWayName.push(text.split(" ")[0]));
  //      }
  //  }).catch(err=>{
  //    console.log('err1');
  //  });

 // PBtn = await Tools.driver.wait(Tools.until.elementLocated(Tools.By.xpath('//*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/div/div/*[' + i + ']')));
 // await PBtn.click();







