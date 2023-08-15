let config = Cypress.config()
describe('Bike Configurator', () => {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#popup-buttons')
      .should('be.visible')
      .click();
    cy.wait(8000);
  });

  it('Select language', () => {
    cy.get('.flag es').contains('ES | EN')
      .should('be.visible')
      .click({ force: true });
  });

  it('Language Settings Language', () => {
    cy.get('.custom-js-dropdown-value custom-js-dropdown-language-value').contains('English')
      .should('be.visible')
      .click({ force: true });
  });

  it('Language Settings Country', () => {
    cy.get('.custom-js-dropdown-value custom-js-dropdown-country-value').contains('Spain')
      .should('be.visible')
      .click({ force: true });
  });

  it('Save', () => {
    cy.get('#edit-submit--2')
      .should('be.visible')
      .click({ force: true });
  });

  it('Your Stromer', () => {
    cy.get('.menu-item menu-item--expanded a[href="https://www.stromerbike.com/en/configurator-model-select"]')
      .should('be.visible')
      .click();
  });

  it('Select a bike ST5 ABS', () => {
    cy.get('.field__item a[href="https://www.stromerbike.com/en/configurator?bike=st5a"]')
      .contains('Configure the ST5 ABS')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/en/configurator?bike=st5a');
    });
  });

  it('Configure your ST5', () => {
    cy.get("select[name='Rahmengrösse'] span")
      .select("L")
      .should('be.visible')
      .click();
    cy.get("select[name='Federgabel'] span")
      .select("With")
      .should('be.visible')
      .click();
    cy.get("select[name='Sattelstütze'] span")
      .select("Without")
      .should('be.visible')
      .click();
    cy.get('button')
      .contains('Next step')
      .should('be.visible')
      .click();
  });
});
  