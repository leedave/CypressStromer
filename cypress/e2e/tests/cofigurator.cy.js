let config = Cypress.config()
describe('My First Test', () => {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#popup-buttons')
      .should('be.visible')
      .click();
    cy.wait(8000);
  });

  it('Take a look at our E-bikes', () => {
    cy.get('#block-multiswitcher-2')
      .should('be.visible')
      .click();
  });

  it('Select language', () => {
    cy.get('.custom-js-dropdown custom-js-dropdown-language')
      .should('be.visible')
      .click({ force: true });
  });

  it('Select a bike', () => {
    cy.get('.menu-item a[href="https://www.stromerbike.com/en/configurator-model-select"]')
      .contains('Your Stromer')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/en/configurator-model-select');
    });
  });
});
  