import { expect, Page } from "@playwright/test";

// Import custom config
import { APP_CONFIG } from "../config";

export function loadConfigFromENV(): void {
  console.warn("loadConfigFromENV");

  APP_CONFIG.baseURL = "" + process.env.BASE_URL;
  APP_CONFIG.authPopUser = "" + process.env.AUTH_POPUP_USER;
  APP_CONFIG.authPopPassword = "" + process.env.AUTH_POPUP_PASSWORD;
  console.info(`baseURL : ${APP_CONFIG.baseURL}`);
  //Logging env variables for debugging
  // console.debug(`authPopPassword : ${process.env.AUTH_POPUP_PASSWORD}`);
}

export async function navigateToPage(page: Page, url: string) {
  let finalURL = "";

  if (APP_CONFIG.baseURL === "yssofindia.org") {
    finalURL = `https://${APP_CONFIG.baseURL}/${url}`;
  } else {
    finalURL = `https://${APP_CONFIG.authPopUser}:${APP_CONFIG.authPopPassword}@${APP_CONFIG.baseURL}/${url}`;
  }
  expect.soft(true, `Actual link: https://${APP_CONFIG.authPopUser}:${APP_CONFIG.authPopPassword}@${APP_CONFIG.baseURL}/${url}`).toBeTruthy();
  expect.soft(true, `Expected link: https://yssofindia.org/${url}`).toBeTruthy();
  // console.warn(`link: ${finalURL}`);
  return await page.goto(finalURL);
}
