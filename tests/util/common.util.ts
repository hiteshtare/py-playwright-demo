import { expect, Page } from "@playwright/test";

// Import custom config
import { TEST_CONFIG } from "../config";

export async function captureFullPageScreenshot(page: Page) {
  await page.screenshot({ fullPage: true });
}

export async function captureANDcompareScreenshots(page: Page, url: string) {
  const screenshotName = `${url}${TEST_CONFIG.strExpected}`;
  const expectedScreenshotName = `${url}${TEST_CONFIG.strActual}`;
  //Navigate to Live site
  await page.goto(url);

  await expect(page).toHaveScreenshot(screenshotName, {
    fullPage: true,
  });

  // Navigate to Test site and capture screenshot
  await page.goto(
    `https://${TEST_CONFIG.authPopUser}:${TEST_CONFIG.authPopPwd}@${TEST_CONFIG.actualSiteURL}/${url}`
  );
  await expect(page).toHaveScreenshot(expectedScreenshotName, {
    fullPage: true,
  });

  await expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    screenshotName
  );
}
