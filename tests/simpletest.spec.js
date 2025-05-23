import {test, expect, Page} from '@playwright/test';
import {HomePage} from '../pages/home.page';

test.beforeEach(async ({page}) => {
	await page.goto('https://myanimelist.net/');

	//Expect title to contain "MyAnimeList.net"
	await expect(page).toHaveTitle(/MyAnimeList\.net/);
});

test('simple test', async ({page}) => {
	const homePage = new HomePage(page);
	await expect(homePage.bannerLocator).toBeVisible();
	await homePage.bannerOKButton.click();
	await expect(homePage.bannerLocator).not.toBeVisible();
});