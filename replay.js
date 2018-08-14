const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');

(async function replay() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/');
    let rawdata = fs.readFileSync('record.json');  
    let data = JSON.parse(rawdata);
    data = data.records; 
    for(var i=0; i<4; i++){
        if(data[i].isForm){
            for( var obj in data[i].formData){
                var fdata = data[i].formData[obj];
                await driver.findElement(By.id(fdata.eid)).sendKeys(fdata.value);
            }
        }
        console.log(data[i].eid);
        await driver.findElement(By.id(data[i].eid)).click();
    }
  } finally {
    //await driver.quit();
    console.log("done");
  }
})();