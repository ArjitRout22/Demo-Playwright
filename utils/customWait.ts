import { Page } from '@playwright/test';

export async function waitForVisible(page: Page, selector: string) {
  await page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
}