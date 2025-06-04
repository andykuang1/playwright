import {Locator, Page} from '@playwright/test';
const {BaseComponent} = require('./base.component');

class MenuBar extends BaseComponent {

  constructor(page) {
    super(page);
    this.template_menuTab = 'xpath=//a[contains(@class, "non-link")][contains(text(), "_TEXT_")]';
    this.template_menuTabItem = 'xpath=//div[contains(@id, "menu_left")]//a[contains(text(), "_TEXT_")]';
    this.searchBar = page.locator('css=#topSearchText');
    this.template_searchResult = 'xpath=//div[@class="name"][contains(text(), "_TEXT_")]'
  }

  async hoverTab(text){
    await this.page.hover(this.template_menuTab.replace('_TEXT_', text));
  }

  async clickTabItem(text){
    const itemLocator = this.page.locator(this.template_menuTabItem.replace('_TEXT_', text));
    await itemLocator.click();
  }

  async inputSearchText(text){
    await this.searchBar.fill(text);
  }

  async clickSearchResult(text) {
    const resultLocator = this.page.locator(this.template_searchResult.replace('_TEXT_', text));
    await resultLocator.click();
  }

}

module.exports = {MenuBar};