const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

Given(/^浏览到搜索网站 "([^"]*)"$/, async function(url) {
    await driver.get(url);
});

When(/^在搜索栏输入"([^"]*)"并点击搜索按钮$/, async function (key) {
    await driver.findElement({ id: "sb_form_q" }).sendKeys(key);
    await driver.findElement({ id: "sb_form_go" }).click();
});

Then(/^搜索结果中应该包含'([^']*)'的关键字$/, async function (key) {
    let result = await driver.findElement({ id: "b_results" }).getText();
    return assert.ok(result.includes(key))
});


