import { test, expect } from '@playwright/test';

test('FinPrime Website Test', async ({ page }) => {
  await page.goto('https://www.finprime.pl/');

  // Ensure 'FinPrime Ievgeniia Skrypnychenko' title is available
  await expect(page.locator('a.navbar-brand')).toContainText('FinPrime Ievgeniia Skrypnychenko');

  // Click on 'Oferta' menu item
  await page.click('a.nav-link[href="#services"]');

  // Ensure the specified texts are available
  await expect(page.locator('#services > div > div.row.text-center > div:nth-child(1) > h4 > p')).toContainText('Ryczałt od przychodów ewidencjonowanych');
  await expect(page.locator('#services > div > div.row.text-center > div:nth-child(2) > h4 > p')).toContainText('Księga Przychodów i Rozchodów');
  await expect(page.locator('#services > div > div.row.text-center > div:nth-child(3) > h4 > p')).toContainText('Księgi rachunkowe (pełna księgowość)');
  await expect(page.locator('#services > div > div.row.text-center > div:nth-child(4) > h4 > p')).toContainText('Kadry i płace');

  // Click on 'Kontakt' menu item
  await page.click('a.nav-link[href="#team"]');

  // Ensure telephone number and email are available
  await expect(page.locator('#team > div > div.row.d-flex.justify-content-center > div:nth-child(1) > div > p')).toContainText('+48730079948');
  await expect(page.locator('#team > div > div.row.d-flex.justify-content-center > div:nth-child(2) > div > p')).toContainText('finprime.ievgeniia.s@gmail.com');

  // Ensure footer has a valid NIP number
  await expect(page.locator('#footer > div > div > div:nth-child(3) > ul > li > span')).toContainText('NIP: 8992968802');
});
