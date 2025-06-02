import {Locator, Page} from '@playwright/test';
const {BaseComponent} = require('./base.component');

class CookieBanner extends BaseComponent {

  constructor(page) {
    super(page);
    this.bannerLocator = page.locator('css=#gdpr-modal-bottom');
    this.bannerOKButton = page.getByRole('button', {name: 'OK'});
  }

}

module.exports = {CookieBanner};