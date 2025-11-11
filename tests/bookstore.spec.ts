import { expect, test } from "@playwright/test";

//Importing Custom modules
import { navigateToPage } from "./util/common.util";

test.describe("Bookstore - Static pages", () => {
  test("Dashboard", async ({ page }) => {
    const url = `bookstore`;

    await navigateToPage(page, url);

    await expect(page).toHaveScreenshot("dashboard.png", { fullPage: true });
  });

  test("Cart", async ({ page }) => {
    const url = `cart`;

    await navigateToPage(page, url);

    await expect(page).toHaveScreenshot("cart.png", { fullPage: true });
  });

  test("My Account", async ({ page }) => {
    const url = `my-account`;

    await navigateToPage(page, url);

    await expect(page).toHaveScreenshot("my-account.png", { fullPage: true });
  });
});

test.describe("Bookstore - Checkout flow", () => {
  test("AOY - English", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    await expect(page).toHaveScreenshot("aoy-eng.png", { fullPage: true });

    // Click on Hindi language radio
    page.locator('a:has-text("Hindi")').click();

    // Wait for a specific image by its alt attribute to be visible.
    await expect(page.locator(`img[alt='AY-hindi-pocket']`)).toBeVisible();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await expect(
      page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: "attached" })
    ).toBeTruthy();

    await expect(page).toHaveScreenshot("aoy-hindi.png", { fullPage: true });
  });
});
