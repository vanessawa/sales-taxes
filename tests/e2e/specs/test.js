// https://docs.cypress.io/api/introduction/api.html

describe("end-to-end test", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080");
    cy.contains("h2", "Products");
  });
  it("clicks the 1st button and checks for content", () => {
    cy.visit("http://localhost:8080");
    cy.get('button[id="1"]').click();
    cy.get('div[id="1"]');
  });
  it("clicks the 7th button and checks for content", () => {
    cy.visit("http://localhost:8080");
    cy.get('button[id="7"]').click();
    cy.get('div[id="7"]');
  });
});
