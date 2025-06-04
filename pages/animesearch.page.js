import {Locator, Page} from '@playwright/test';
const {BasePage} = require('./base.page');

class AnimeSearchPage extends BasePage {

  constructor(page) {
    super(page);
    this.headerLocator = page.locator('xpath=//h1[contains(text(), "Anime Search")]');
  }

}

module.exports = {AnimeSearchPage};