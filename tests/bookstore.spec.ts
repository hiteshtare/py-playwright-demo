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
  test("AOY - English paperback", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    await expect(page).toHaveScreenshot("aoy-eng.png", { fullPage: true });
  });

  test("AOY - Hindi paperback", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // Wait for a specific image by its alt attribute to be visible.
    await expect(page.locator(`img[alt='AY-hindi-pocket']`)).toBeVisible();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await expect(
      page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: "attached" })
    ).toBeTruthy();

    await expect(page).toHaveScreenshot("aoy-hindi.png", { fullPage: true });
  });

  test("AOY - Hindi paperback Quantity 2", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // Wait for a specific image by its alt attribute to be visible.
    await expect(page.locator(`img[alt='AY-hindi-pocket']`)).toBeVisible();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await expect(
      page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: "attached" })
    ).toBeTruthy();

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    await expect(page).toHaveScreenshot(
      "aoy-hindi-2-quanities.png",
      { fullPage: true }
    );
  });

  test("AOY - Hindi on Cart page", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // Wait for a specific image by its alt attribute to be visible.
    await expect(page.locator(`img[alt='AY-hindi-pocket']`)).toBeVisible();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await expect(
      page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: "attached" })
    ).toBeTruthy();

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    await expect(page).toHaveScreenshot("aoy-hindi-2-quanities-on-cart.png", {
      fullPage: true,
    });
  });

  test("AOY - Hindi on Checkout page", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // Wait for a specific image by its alt attribute to be visible.
    await expect(page.locator(`img[alt='AY-hindi-pocket']`)).toBeVisible();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await expect(
      page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: "attached" })
    ).toBeTruthy();

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    // Click on Proceed to Checkout
    await page.locator('a:has-text("Proceed to Checkout")').click();

    await expect(page).toHaveScreenshot("aoy-hindi-2-quanities-on-checkout.png", {
      fullPage: true,
    });
  });
});
