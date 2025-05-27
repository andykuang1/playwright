import {test, expect, Page} from '@playwright/test';

const {HomePage} = require('../pages/home.page');
const {AnimePage} = require('../pages/anime.page');

const {SearchBar} = require('../components/searchbar.component');

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

	const searchBar = new SearchBar(page);
	await searchBar.inputSearchText('Shingeki no Kyojin');
	await searchBar.clickSearchResult('Shingeki no Kyojin Season 3 Part 2');

	const animePage = new AnimePage(page);
	await expect(animePage.body).toBeVisible();
});