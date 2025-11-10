import { test, expect } from "@playwright/test";
import { describe } from "node:test";
import { captureANDcompareScreenshots } from "./util/common.util";

describe("Bookstore ", () => {
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
