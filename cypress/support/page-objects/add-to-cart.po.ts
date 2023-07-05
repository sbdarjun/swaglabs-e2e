/// <reference types="Cypress" />
class AddToCart {
  visit() {
    cy.url().should("include", "inventory");
  }
  addToCartButton() {
    return cy.get(".btn_inventory").should("be.visible");
  }
  cartButton() {
    return cy.get("#shopping_cart_container").should("be.visible");
  }
  selectRandomItemToCart() {
    cy.get(".btn_inventory").then(($buttons) => {
      const randomItem = Cypress._.random(0, $buttons.length - 1);
      cy.wrap($buttons[randomItem]).click();
    });
  }
  checkCartItem(){
    return cy.get(".cart_item").should("be.visible")
  }
}
export default AddToCart;
