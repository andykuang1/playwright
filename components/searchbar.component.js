import {Locator, Page} from '@playwright/test';
const {BaseComponent} = require('./base.component');

class SearchBar extends BaseComponent {

  constructor(page) {
    super(page);
    this.searchBar = page.locator('css=#topSearchText');
    this.template_searchResult = 'xpath=//div[@class="name"][contains(text(), "_TEXT_")]'
  }

  async inputSearchText(text){
    await this.searchBar.fill(text);
  }

  async clickSearchResult(text) {
    const resultLocator = this.page.locator(this.template_searchResult.replace('_TEXT_', text));
    await resultLocator.click();
  }

}

module.exports = {SearchBar};