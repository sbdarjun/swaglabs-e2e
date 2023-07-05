/// <reference types="Cypress" />

import AddToCart from "../support/page-objects/add-to-cart.po";

describe("Visit All Items Page", () => {
  var addToCart = new AddToCart();
  beforeEach(() => {
    cy.login();
  });
  after(() => {
    cy.log("Standard User is able to add Item into the cart");
  });
  it("and Validate Add to Cart Functionality", () => {
    addToCart.visit();
    addToCart.addToCartButton();
    addToCart.cartButton();
    addToCart.selectRandomItemToCart();
    addToCart.cartButton().click();
    addToCart.checkCartItem();
  });
});
