import {Locator, Page} from '@playwright/test';
const {BasePage} = require('./base.page');

class HomePage extends BasePage {

  constructor(page) {
    super(page);
    this.bannerLocator = page.locator('css=#gdpr-modal-bottom');
  }
  
}

module.exports = {HomePage};