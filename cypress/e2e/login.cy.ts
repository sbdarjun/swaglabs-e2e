/// <reference types="Cypress" />

import { data } from "cypress/types/jquery";
import fake from "../fixtures/faker";
import Login from "../support/page-objects/login.po";

describe("Visit Swag Labs", () => {
  var login = new Login();
  it("and Validate Landing Page Component", () => {
    login.visit();
    cy.url().should("include", "saucedemo");
    login.swagLabLogo();
    login.userNameInput();
    login.passwordInput();
    login.loginButton();
  });
  it("and Validate Login With Invalid Credential", () => {
    login.visit();
    login.userNameInput().type(fake.email());
    login.passwordInput().type(fake.password());
    login.loginButton().click();
    login.loginErrorMessage();
  });
  it("and Validate Login With Locked Out User", () => {
    login.visit();
    cy.fixture("data").then((data) => {
      login.userNameInput().type(data.lockedOutUser.email);
      login.passwordInput().type(data.lockedOutUser.password);
      login.loginButton().click();
    });
  });
  it("and Validate Login With Standard User", () => {
    login.visit();
    login.standardUserLoginData();
    login.hamburgerMenu();
  });
});
