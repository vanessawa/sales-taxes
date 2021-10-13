// https://docs.cypress.io/api/introduction/api.html

describe("testing site access", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080");
    cy.contains("h2", "Products");
  });
});
describe("clicking all the buttons", () => {
  for (let i = 1; i <= 9; i++) {
    it('click button [id="' + i + '"]', () => {
      cy.visit("http://localhost:8080");
      cy.get('button[id="' + i + '"]').click();
      cy.get('div[id="' + i + '"]');
    });
  }
});
