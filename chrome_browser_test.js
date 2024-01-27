const { test, expect } = require('@playwright/test');

test('FinPrime Website Test', async ({ page }) => {
  await page.goto('https://www.finprime.pl/');

  // Ensure FinPrime Ievgeniia Skrypnychenko is available
  await expect(page.locator('a.navbar-brand')).toContainText('FinPrime Ievgeniia Skrypnychenko');

  // Click on Oferta menu item
  await page.click('a.nav-link[href="#services"]');

  // Ensure the specified texts are available
  await expect(page.locator('p')).toContainText('Ryczałt od przychodów ewidencjonowanych');
  await expect(page.locator('p')).toContainText('Księga Przychodów i Rozchodów');
  await expect(page.locator('p')).toContainText('Księgi rachunkowe (pełna księgowość)');
  await expect(page.locator('p')).toContainText('Kadry i płace');

  // Click on Kontakt menu item
  await page.click('a.nav-link[href="#team"]');

  // Ensure telephone number and email are available
  await expect(page.locator('p.text-muted')).toContainText('+48730079948');
  await expect(page.locator('p.text-muted')).toContainText('finprime.ievgeniia.s@gmail.com');

  // Ensure footer has a valid NIP number
  await expect(page.locator('span.nip')).toContainText('NIP: 8992968802');
});
