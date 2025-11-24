// @ts-check
import { test, expect } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('get started link1', async ({ page }) => {
  await page.goto('https://reshmi0611.github.io/testargs/index.html');
  await argosScreenshot(page, "homepage1");
  
  // await page.goto('https://reshmi0611.github.io/testargs/ptwo.html');
  // await argosScreenshot(page, "homepage");
  // await page.goto('https://reshmi0611.github.io/testargs/pthree.html');
  // await argosScreenshot(page, "homepage");
  // await page.goto('https://reshmi0611.github.io/testargs/pfour.html');
  // await argosScreenshot(page, "homepage");
  // await page.goto('https://reshmi0611.github.io/testargs/pfive.html');
  // await argosScreenshot(page, "homepage");
});

test('get started link2', async ({ page }) => {
  await page.goto('https://reshmi0611.github.io/testargs/ptwo.html');
  await argosScreenshot(page, "homepage2");
});

test('get started link3', async ({ page }) => {
  await page.goto('https://reshmi0611.github.io/testargs/pthree.html');
  await argosScreenshot(page, "homepage3");
});
test('get started link4', async ({ page }) => {
  await page.goto('https://reshmi0611.github.io/testargs/pfour.html');
  await argosScreenshot(page, "homepage4");
});
test('get started link5', async ({ page }) => {
  await page.goto('https://reshmi0611.github.io/testargs/pfive.html');
  await argosScreenshot(page, "homepage5");
});
