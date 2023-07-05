import { faker } from "@faker-js/faker";
const fake = {
  email: () => faker.internet.email(),
  password: () => faker.internet.password(),
};
export default fake;