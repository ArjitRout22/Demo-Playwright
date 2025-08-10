import { Page } from '@playwright/test';
import FormPage from './FormPage';

export default class PageManager {
  private page: Page;
  private formPageInstance: FormPage | null = null;

  constructor(page: Page) {
    this.page = page;
  }

  formPage(): FormPage {
    if (!this.formPageInstance) {
      this.formPageInstance = new FormPage(this.page);
    }
    return this.formPageInstance;
  }
}