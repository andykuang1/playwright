import {test, expect, Page} from '@playwright/test';

const {HomePage} = require('../pages/home.page');
const {AnimePage} = require('../pages/anime.page');

const {CookieBanner} = require ('../components/cookiebanner.component');
const {MenuBar} = require('../components/searchbar.component');

test.beforeEach(async ({page}) => {
	await page.goto('https://myanimelist.net/');

	//Expect title to contain "MyAnimeList.net"
	await expect(page).toHaveTitle(/MyAnimeList\.net/);
});

test.describe('Cookie Banner tests', () => {
	test('Clear cookie banner and confirm banner no longer appears', async ({page}) => {
		const cookieBanner = new CookieBanner(page);
		await expect(cookieBanner.bannerLocator).toBeVisible();
		await cookieBanner.bannerOKButton.click();
		await expect(cookieBanner.bannerOKButton).not.toBeVisible();

		await page.reload();
		await page.waitForTimeout(5000);
		await expect(cookieBanner.bannerOKButton).not.toBeVisible();
	});
});

test.describe('Execute a search on the menu bar', () => {
	test ('Execute a search', async ({page}) => {
		const menuBar = new MenuBar(page);
		await menuBar.inputSearchText('Shingeki no Kyojin');
		await menuBar.clickSearchResult('Shingeki no Kyojin Season 3 Part 2');

		const animePage = new AnimePage(page);
		await expect(animePage.body).toBeVisible();
	});
});
