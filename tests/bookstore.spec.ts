import { test, expect } from "@playwright/test";
import { describe } from "node:test";

describe("Bookstore ", () => {
  test("Dashboard vrt", async ({ page }) => {
    await page.goto("/bookstore");
    await expect(page).toHaveScreenshot("example_com_baseline.png");

    // Navigate to and capture screenshot of the second website
    await page.goto("https://yssdev:Jaiguru@123!@test.yssofindia.org/bookstore");
    // Playwright will compare 'another_example_org_screenshot.png' with 'example_com_baseline.png'
    // and fail if there are visual differences.
    await expect(await page.screenshot()).toMatchSnapshot("example_com_baseline.png");
  });
});
