import {Locator, Page} from '@playwright/test';
const {BasePage} = require('./base.page');

class AnimePage extends BasePage {

  constructor(page) {
    super(page);
    this.body = page.locator('css=h1.title-name');
  }

}

module.exports = {AnimePage};