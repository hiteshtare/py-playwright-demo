import { expect, Page } from "@playwright/test";

// Import custom config
import { APP_CONFIG } from "../config";

export function loadConfigFromENV(): void {
  console.warn("loadConfigFromENV");

  APP_CONFIG.authPopUser = "" + process.env.AUTH_POPUP_USER;
  APP_CONFIG.authPopPassword = "" + process.env.AUTH_POPUP_PASSWORD;
  console.info(`authPopUser : ${APP_CONFIG.authPopUser}`);
  //Logging env variables for debugging
  // console.debug(`authPopPassword : ${process.env.AUTH_POPUP_PASSWORD}`);
}

export async function captureFullPageScreenshot(page: Page) {
  await page.screenshot({ fullPage: true });
}

export async function captureANDcompareScreenshots(page: Page, url: string) {
  const screenshotName = `${url}${APP_CONFIG.strExpected}`;
  const expectedScreenshotName = `${url}${APP_CONFIG.strActual}`;
  //Navigate to Live site
  await page.goto(url);

  await expect(page).toHaveScreenshot(screenshotName, {
    fullPage: true,
  });

  // Navigate to Test site and capture screenshot
  await page.goto(
    `https://${APP_CONFIG.authPopUser}:${APP_CONFIG.authPopPassword}@${APP_CONFIG.actualSiteURL}/${url}`
  );
  await expect(page).toHaveScreenshot(expectedScreenshotName, {
    fullPage: true,
  });

  await expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    screenshotName
  );
}
