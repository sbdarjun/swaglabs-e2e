import Login from "./page-objects/login.po";

Cypress.Commands.add('login', () => {
  const standardLogin = new Login();
  standardLogin.visit();
  standardLogin.standardUserLoginData();
});
