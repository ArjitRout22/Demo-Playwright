import { Page } from '@playwright/test';

export const FormPageLocators = {
  // Text fields
  firstName: (page: Page) => page.getByPlaceholder('First Name'),
  lastName: (page: Page) => page.getByPlaceholder('Last Name'),
  email: (page: Page) => page.getByPlaceholder('name@example.com'),

  // Gender radio buttons
  gender: (page: Page, gender: string) => page.getByText(gender, { exact: true }),
  // genderMale: (page: Page) => page.getByText('Male', { exact: true }),
  // genderFemale: (page: Page) => page.getByText('Female', { exact: true }),
  // genderOther: (page: Page) => page.getByText('Other', { exact: true }),

  

  // Mobile number
  phone: (page: Page) => page.getByPlaceholder('Mobile Number'),

  // Date of Birth
  dobInput: (page: Page) => page.locator('#dateOfBirthInput'),
  dobMonthSelect: (page: Page) => page.locator('.react-datepicker__month-select'),
  dobYearSelect: (page: Page) => page.locator('.react-datepicker__year-select'),
  dobDay: (page: Page, day: string) =>
    page.locator(`.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`),

  // Subject input
  subjectsInput: (page: Page) => page.locator('#subjectsInput'),

  // Hobbies checkboxes
  hobbies: (page: Page, hobby: string) => page.getByText(hobby, { exact: true }),

  // Upload picture
  uploadPicture: (page: Page) => page.locator('#uploadPicture'),

  // Current address
  currentAddress: (page: Page) => page.getByPlaceholder('Current Address'),

  // State and City dropdowns
  stateDropdown: (page: Page) => page.locator('#state .css-1wa3eu0-placeholder'),
stateOption: (page: Page, state: string) => page.getByText(state, { exact: true }),
cityDropdown: (page: Page) => page.locator('#city .css-1wa3eu0-placeholder'),
cityOption: (page: Page, city: string) => page.getByText(city, { exact: true }),


  // Submit button
  submitButton: (page: Page) => page.getByRole('button', { name: 'Submit' }),

  // Modal
  modalTitle: (page: Page) => page.locator('#example-modal-sizes-title-lg'),
  confirmationTable: (page: Page) => page.locator('.table-responsive')
};
