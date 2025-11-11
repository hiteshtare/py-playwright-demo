import { expect, test } from "@playwright/test";

// Import custom config
import { APP_CONFIG } from "./config";

//Importing Custom modules
import { captureANDcompareScreenshots } from "./util/common.util";

test.describe("Bookstore - Static pages", () => {
  test("Dashboard", async ({ page }) => {
    const url = `bookstore`;

    await captureANDcompareScreenshots(page, url);
  });

  test("Cart", async ({ page }) => {
    const url = `cart`;

    await captureANDcompareScreenshots(page, url);
  });

  test("My Account", async ({ page }) => {
    const url = `my-account`;

    await captureANDcompareScreenshots(page, url);
  });
});

test.describe.only("Bookstore - Checkout flow", () => {
  test("AOY - English", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    const screenshotName = `${url}${APP_CONFIG.strExpected}`;
    const expectedScreenshotName = `${url}${APP_CONFIG.strActual}`;
    //Navigate to Live site
    await page.goto(url);

    await page.screenshot({ fullPage: true });

    // Click on Hindi language radio
    page.locator('a:has-text("Hindi")').click();

    // Wait for a specific image by its alt attribute to be visible.
    await expect(page.locator(`img[alt='AY-hindi-pocket']`)).toBeVisible();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'attached' })).toBeTruthy();
    
    await page.screenshot({ fullPage: true });
    
    // // Navigate to Test site and capture screenshot
    // await page.goto(
    //   `https://${APP_CONFIG.authPopUser}:${APP_CONFIG.authPopPassword}@${APP_CONFIG.actualSiteURL}/${url}`
    // );
    // await expect(page).toHaveScreenshot(expectedScreenshotName, {
    //   fullPage: true,
    // });

    // await expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    //   screenshotName
    // );

  });
});
