import {test, expect} from '@playwright/test';

test('simple test', async ({page}) => {
	await page.goto('https://myanimelist.net/');

	//Expect title to contain "MyAnimeList.net"
	await expect(page).toHaveTitle(/MyAnimeList\.net/);

	const bannerLocator = page.locator('css=#gdpr-modal-bottom')
	await expect(bannerLocator).toBeVisible();
	await page.getByRole('button', {name: 'OK'}).click();
	await expect(bannerLocator).not.toBeVisible();
});