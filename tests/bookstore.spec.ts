import { test, expect } from "@playwright/test";
import { describe } from "node:test";

const strExpected = "-expected.png";
const strActual = "-actual.png";

describe("Bookstore ", () => {
  test("Dashboard", async ({ page }) => {
    const url = `bookstore`;
    const screenshotName = `${url}${strExpected}`;
    const expectedScreenshotName = `${url}${strActual}`;
    //Navigate to Live site
    await page.goto(url);

    await expect(page).toHaveScreenshot(screenshotName);

    // Navigate to Test site and capture screenshot
    await page.goto(`https://yssdev:Jaiguru@123!@test.yssofindia.org/${url}`);
    await expect(page).toHaveScreenshot(expectedScreenshotName);

    await expect(await page.screenshot()).toMatchSnapshot(screenshotName);
  });

  test("Cart", async ({ page }) => {
    const url = `cart`;
    const screenshotName = `${url}${strExpected}`;
    const expectedScreenshotName = `${url}${strActual}`;
    //Navigate to Live site
    await page.goto(url);

    await expect(page).toHaveScreenshot(screenshotName);

    // Navigate to Test site and capture screenshot
    await page.goto(`https://yssdev:Jaiguru@123!@test.yssofindia.org/${url}`);
    await expect(page).toHaveScreenshot(expectedScreenshotName);

    await expect(await page.screenshot()).toMatchSnapshot(screenshotName);
  });

  test("My Account", async ({ page }) => {
    const url = `my-account`;
    const screenshotName = `${url}${strExpected}`;
    const expectedScreenshotName = `${url}${strActual}`;
    //Navigate to Live site
    await page.goto(url);

    await expect(page).toHaveScreenshot(screenshotName);

    // Navigate to Test site and capture screenshot
    await page.goto(`https://yssdev:Jaiguru@123!@test.yssofindia.org/${url}`);
    await expect(page).toHaveScreenshot(expectedScreenshotName);

    await expect(await page.screenshot()).toMatchSnapshot(screenshotName);
  });
});
