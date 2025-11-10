import { test, expect } from "@playwright/test";
import { describe } from "node:test";

const strExpected = "-expected.png";
const strActual = "-actual.png";

describe("Bookstore ", () => {
  test("Dashboard vrt", async ({ page }) => {
    await page.goto("/bookstore");
    const screenshotName = `dashboard${strExpected}`;
    const expctedScreenshotName = `dashboard${strActual}`;

    await expect(page).toHaveScreenshot(screenshotName);

    // Navigate to and capture screenshot of the second website
    await page.goto("https://yssdev:Jaiguru@123!@test.yssofindia.org/bookstore");
    await expect(page).toHaveScreenshot(expctedScreenshotName);

    await expect(await page.screenshot()).toMatchSnapshot(screenshotName);
  });
});

