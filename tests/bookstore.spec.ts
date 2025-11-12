import { expect, test } from "@playwright/test";

// Import custom config
import { APP_CONFIG } from "./config";

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

test.describe.only("Bookstore - Checkout flow", () => {
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

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await page.waitForSelector(`img[alt='AY-hindi-pocket']`, {
      state: "attached",
    });

    await expect(page).toHaveScreenshot("aoy-hindi.png", { fullPage: true });
  });

  test("AOY - Hindi paperback with Qty 2", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await page.waitForSelector(`img[alt='AY-hindi-pocket']`, {
      state: "attached",
    });

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    await expect(page).toHaveScreenshot("aoy-hindi-2-qty.png", {
      fullPage: true,
    });
  });

  test("Cart page having 1 product: AOY - Hindi", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await page.waitForSelector(`img[alt='AY-hindi-pocket']`, {
      state: "attached",
    });

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    await expect(page).toHaveScreenshot("aoy-hindi-2-qty-on-cart.png", {
      fullPage: true,
    });
  });

  test("Checkout page having 1 product: AOY - Hindi", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await page.waitForSelector(`img[alt='AY-hindi-pocket']`, {
      state: "attached",
    });

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    // Click on Proceed to Checkout
    await page.locator('a:has-text("Proceed to Checkout")').click();

    await expect(page).toHaveScreenshot("aoy-hindi-2-qty-on-checkout.png", {
      fullPage: true,
    });
  });

  test("Checkout page having 1 product: AOY - Hindi (Logged In)", async ({
    page,
  }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await page.waitForSelector(`img[alt='AY-hindi-pocket']`, {
      state: "attached",
    });

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    // Click on Proceed to Checkout button
    await page.locator('a:has-text("Proceed to Checkout")').click();

    // Click on Login Now button
    await page.getByRole("link", { name: "Login Now" }).click();

    await page.locator("//input[@id='email']").fill(APP_CONFIG.loginEmail);
    await page
      .locator("//input[@id='password']")
      .fill(APP_CONFIG.loginPassword);

    await page.getByText("Continue", { exact: true }).click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/checkout`, {
      waitUntil: "domcontentloaded",
    });

    await expect(page).toHaveScreenshot(
      "logged-in-aoy-hindi-2-qty-on-checkout.png",
      {
        fullPage: true,
      }
    );
  });

  test("Checkout page having 3 products: (2) AOY Hi + (1) GTWA + MEQ (1) (Logged In)", async ({
    page,
  }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await page.waitForSelector(`img[alt='AY-hindi-pocket']`, {
      state: "attached",
    });

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    // Click on Proceed to Checkout button
    await page.locator('a:has-text("Proceed to Checkout")').click();

    // Click on Login Now button
    await page.getByRole("link", { name: "Login Now" }).click();

    await page.locator("//input[@id='email']").fill(APP_CONFIG.loginEmail);
    await page
      .locator("//input[@id='password']")
      .fill(APP_CONFIG.loginPassword);

    await page.getByText("Continue", { exact: true }).click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/checkout`, {
      waitUntil: "domcontentloaded",
    });

    // ---------------------- God Talks with Arjuna ---------------------- //
    const second_url = `product/god-talks-with-arjuna-the-bhagavad-gita`;

    await navigateToPage(page, second_url);

    await page.waitForSelector(`img[alt='GTWA-Eng-front']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();
    // ---------------------- God Talks with Arjuna ---------------------- //

    // ---------------------- Man's Eternal Quest ---------------------- //
    const third_url = `product/mans-eternal-quest`;

    await navigateToPage(page, third_url);

    // Click on Tamil language radio
    await page.locator('a:has-text("Tamil")').click();

    await page.waitForSelector(`img[alt='MEQ-tamil-front']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();
    // ---------------------- Man's Eternal Quest ---------------------- //

    // Click on Proceed to Checkout button
    // await page.locator('a:has-text("Proceed to Checkout")').click();

    await expect(page).toHaveScreenshot(
      "logged-in-3-products-on-checkout.png",
      {
        fullPage: true,
      }
    );
  });

  test("Checkout page having 3 products: (2) AOY Hi + (1) GTWA + MEQ Qty is (2)", async ({
    page,
  }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await page.waitForSelector(`img[alt='AY-hindi-pocket']`, {
      state: "attached",
    });

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    // Click on Proceed to Checkout button
    await page.locator('a:has-text("Proceed to Checkout")').click();

    // Click on Login Now button
    await page.getByRole("link", { name: "Login Now" }).click();

    await page.locator("//input[@id='email']").fill(APP_CONFIG.loginEmail);
    await page
      .locator("//input[@id='password']")
      .fill(APP_CONFIG.loginPassword);

    await page.getByText("Continue", { exact: true }).click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/checkout`, {
      waitUntil: "domcontentloaded",
    });

    // ---------------------- God Talks with Arjuna ---------------------- //
    const second_url = `product/god-talks-with-arjuna-the-bhagavad-gita`;

    await navigateToPage(page, second_url);

    await page.waitForSelector(`img[alt='GTWA-Eng-front']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();
    // ---------------------- God Talks with Arjuna ---------------------- //

    // ---------------------- Man's Eternal Quest ---------------------- //
    const third_url = `product/mans-eternal-quest`;

    await navigateToPage(page, third_url);

    // Click on Tamil language radio
    await page.locator('a:has-text("Tamil")').click();

    await page.waitForSelector(`img[alt='MEQ-tamil-front']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();
    // ---------------------- Man's Eternal Quest ---------------------- //

    //Increase MEQ to 2 by clicking + icon on Cart page
    await page.getByRole("link", { name: "+" }).nth(2).click();

    // Wait for the loading spinner to be hidden
    await expect(
      page.locator(
        "//form[@class='woocommerce-cart-form processing']//div[@class='blockUI blockOverlay']"
      )
    ).toBeHidden();

    await expect(page).toHaveScreenshot(
      "MEQ-2-qty-from-3-products-on-checkout.png",
      {
        fullPage: true,
      }
    );
  });

  test.only("Checkout page having 4 products: (2) AOY Hi + (1) GTWA + (2) MEQ + 1 Armrest ", async ({
    page,
  }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    // await expect(page.waitForSelector(`img[alt='AY-hindi-pocket']`, { state: 'visible' })).toBeTruthy();
    await page.waitForSelector(`img[alt='AY-hindi-pocket']`, {
      state: "attached",
    });

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    // Click on Proceed to Checkout button
    await page.locator('a:has-text("Proceed to Checkout")').click();

    // Click on Login Now button
    await page.getByRole("link", { name: "Login Now" }).click();

    await page.locator("//input[@id='email']").fill(APP_CONFIG.loginEmail);
    await page
      .locator("//input[@id='password']")
      .fill(APP_CONFIG.loginPassword);

    await page.getByText("Continue", { exact: true }).click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/checkout`, {
      waitUntil: "domcontentloaded",
    });

    // ---------------------- God Talks with Arjuna ---------------------- //
    const second_url = `product/god-talks-with-arjuna-the-bhagavad-gita`;

    await navigateToPage(page, second_url);

    await page.waitForSelector(`img[alt='GTWA-Eng-front']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();
    // ---------------------- God Talks with Arjuna ---------------------- //

    // ---------------------- Man's Eternal Quest ---------------------- //
    const third_url = `product/mans-eternal-quest`;

    await navigateToPage(page, third_url);

    // Click on Tamil language radio
    await page.locator('a:has-text("Tamil")').click();

    await page.waitForSelector(`img[alt='MEQ-tamil-front']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();
    // ---------------------- Man's Eternal Quest ---------------------- //

    //Increase MEQ to 2 by clicking + icon on Cart page
    await page.getByRole("link", { name: "+" }).nth(2).click();

    // Wait for the loading spinner to be hidden
    await expect(
      page.locator(
        "//form[@class='woocommerce-cart-form processing']//div[@class='blockUI blockOverlay']"
      )
    ).toBeHidden();

    // ---------------------- Armrest ---------------------- //
    const fourth_url = `/product/armrest-wooden`;

    await navigateToPage(page, fourth_url);

    await page.waitForSelector(`img[alt='armrest-wooden-foldable-yss-front.jpg']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();
    // ---------------------- Armrest ---------------------- //
    
    await expect(page).toHaveScreenshot(
      "armrest-from-4-products-on-checkout.png",
      {
        fullPage: true,
      }
    );
  });
});
