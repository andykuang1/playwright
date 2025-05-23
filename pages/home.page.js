import {Page} from '@playwright/test';
import {BasePage} from './base.page';

export class HomePage extends BasePage {

  constructor(page) {
    super(page);
    this.bannerLocator = page.locator('css=#gdpr-modal-bottom');
    this.bannerOKButton = page.getByRole('button', {name: 'OK'});
  }
  
}