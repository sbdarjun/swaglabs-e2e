import { data } from "cypress/types/jquery";

class Login {
  visit() {
    cy.visit("/");
  }
  swagLabLogo() {
    return cy.get(".login_logo").contains("Swag Labs");
  }
  userNameInput() {
    return cy.get("#user-name").should("have.attr", "placeholder", "Username");
  }
  passwordInput() {
    return cy.get("#password").should("have.attr", "placeholder", "Password");
  }
  loginButton() {
    return cy.get("#login-button").should("exist");
  }
  loginErrorMessage() {
    return cy.get(".error-message-container").should("be.visible");
  }
  lockedUserErrorMessage() {
    return cy
      .get(".error-message-container")
      .contains("Epic sadface: Sorry, this user has been locked out.");
  }
  standardUserLoginData() {
    cy.fixture("data").then((data) => {
      this.userNameInput().clear().type(data.standardUser.email);
      this.passwordInput().clear().type(data.standardUser.password);
      this.loginButton().click();
    });
  }
  hamburgerMenu() {
    return cy.get("#react-burger-menu-btn").should("be.visible");
  }
}
export default Login;
