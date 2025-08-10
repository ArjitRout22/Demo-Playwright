import { faker } from '@faker-js/faker';

export function generateStudentData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
    phone: faker.string.numeric({ length: 10 }),
    dob: { day: '20', month: 'April', year: '1990' },
    subject: 'Maths',
    hobbies: ['Sports', 'Reading'],
    address: faker.location.streetAddress(),
    state: 'NCR',
    city: 'Delhi'
  };
}