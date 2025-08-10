import { Page, expect } from '@playwright/test';
import { waitForVisible } from '../utils/customWait';
import { FormPageLocators as loc } from '../selectors/FormPageLocators';

export default class FormPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/automation-practice-form');
    await this.page.evaluate(() => {
      document.querySelector('footer')?.remove();
    });
  }

  async fillForm(data: any) {
    // Basic details
    await loc.firstName(this.page).fill(data.firstName);
    await loc.lastName(this.page).fill(data.lastName);
    await loc.email(this.page).fill(data.email);
    await loc.gender(this.page, data.gender).check();
    await loc.phone(this.page).fill(data.phone);

    // Date of Birth
    await loc.dobInput(this.page).click();
    await loc.dobMonthSelect(this.page).selectOption({ label: data.dob.month });
    await loc.dobYearSelect(this.page).selectOption(data.dob.year);
    await loc.dobDay(this.page, data.dob.day).click();

    // Subject
    await loc.subjectsInput(this.page).fill(data.subject);
    await this.page.keyboard.press('Enter');

    // Hobbies
    for (const hobby of data.hobbies) {
      await loc.hobbies(this.page, hobby).check();
    }

    // Upload picture
    await loc.uploadPicture(this.page).setInputFiles('test-data/testImage.png');

    // Address
    await loc.currentAddress(this.page).fill(data.address);

    // State
    await loc.stateDropdown(this.page).scrollIntoViewIfNeeded();
    await loc.stateDropdown(this.page).click({ force: true });
    await loc.stateOption(this.page, data.state).click();

    // City
    await loc.cityDropdown(this.page).scrollIntoViewIfNeeded();
    await loc.cityDropdown(this.page).click({ force: true });
    await loc.cityOption(this.page, data.city).click();
  }

  async submit() {
    await loc.submitButton(this.page).click();
  }

  async validateModal(data: any) {
    await waitForVisible(this.page, '.modal-content');
    await expect(loc.modalTitle(this.page)).toBeVisible();

    const tableText = await loc.confirmationTable(this.page).textContent();
    expect(tableText).toContain(data.firstName);
    expect(tableText).toContain(data.lastName);
    expect(tableText).toContain(data.email);
    expect(tableText).toContain(data.phone);
    expect(tableText).toContain(data.subject);
    expect(tableText).toContain(data.state);
    expect(tableText).toContain(data.city);

    console.log('Confirmation table:\n', tableText);
  }
}
