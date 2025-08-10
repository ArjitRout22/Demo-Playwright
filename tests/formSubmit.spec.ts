import { test } from '@playwright/test';
import PageManager from '../pages/PageManager';
import { generateStudentData } from '../utils/testData';
import fs from 'fs';

const staticData = JSON.parse(fs.readFileSync('test-data/formData.json', 'utf-8'));

test.describe('Student Registration Form - Data Driven with PageManager', () => {

  staticData.forEach((data: any, index: number) => {
    test(`Static dataset #${index + 1}`, async ({ page }) => {
      const pm = new PageManager(page);
      await pm.formPage().open();
      await pm.formPage().fillForm(data);
      await pm.formPage().submit();
      await pm.formPage().validateModal(data);
    });
  });

  for (let i = 1; i <= 2; i++) {
    test(`Dynamic faker dataset #${i}`, async ({ page }) => {
      const pm = new PageManager(page);
      const fakerData = generateStudentData();
      await pm.formPage().open();
      await pm.formPage().fillForm(fakerData);
      await pm.formPage().submit();
      await pm.formPage().validateModal(fakerData);
    });
  }

});