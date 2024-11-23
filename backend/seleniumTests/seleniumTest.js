const { Builder, By } = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000');
    const title = await driver.getTitle();
    console.log('Page Title:', title);
  } finally {
    await driver.quit();
  }
}

runTest();
