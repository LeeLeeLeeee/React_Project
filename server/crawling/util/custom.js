function thisPage(i,t){
    return  new Promise(resolve=>{
      if(i%7===0) {
        resolve( (i+( (t-1)*5 ))-1 );
      } else {
        resolve( (i+(t*5))-1 );
      }
    });
  }

  async function WaitPageReload(Tools,types,param,prevName) {
      const ThisPage = await webElementLocated(Tools,types,param,false);
      const UntilFunc = Tools.until.elementTextNot(ThisPage,prevName);
      const resultStatus = (await ThisPage.getText() !== prevName);
      return new Promise((resolve,reject)=>{
        resultStatus ? resolve("resultStatus") : reject("resultStatus");
      })    
  }

  async function webElementLocated(Tools,types,param,multiple) {
    const driver = Tools.driver;
    const By = Tools.By;
    const until = Tools.until;
    let LocateString
    let typesFlag = true;
    const el = eval(`By.${types}('${param}')`);
    multiple ? LocateString = "elementsLocated" : LocateString = "elementLocated" ;
    const _webElement =  await driver.wait( eval(`until.${LocateString}(el)`) ,10000 );
    return new Promise((resolve,reject)=>{
        if(typesFlag) {
            resolve(_webElement);
        } else {
            reject('Error');
        }
    }); 
  }


  module.exports.thisPage = thisPage;
  module.exports.webElementLocated = webElementLocated;
  module.exports.WaitPageReload = WaitPageReload;