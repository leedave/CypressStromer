let config = Cypress.config()
describe('Bike Configurator', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#popup-buttons')
      .should('be.visible')
      .click();
  });

  //Select a language and country

  it('Select language', function ()  {
    cy.get('#block-multiswitcher-2')
      .should('be.visible')
      .click();
  
    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown.custom-js-dropdown-language')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown-option.custom-js-dropdown-language-option').contains('English')
      .should('be.visible')
      .click();
      
    cy.get('#aos-locale-multi-switcher-form--2 [cdata-selector-target="aos-multi-switcher-country-selector"]')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown-option.custom-js-dropdown-country-options').contains('USA')
      .should('be.visible')
      .click();

    cy.get('#edit-submit--2')
      .should('be.visible')
      .click();
  });

  //Select a E-bike

  it('Your Stromer', function () {
    cy.get('#block-menureferencesbycountry > :nth-child(2) > :nth-child(2) > :nth-child(1)')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/en/configurator-model-select');
    });
  
    cy.get(':nth-child(1) > .paragraph--type--aospcc01 > .container > :nth-child(1) > .col-lg-12 > .grid-container > .row > :nth-child(2) > .str-custom-input-wrapper > .str-custom-input > .str-custom-input-inner > .str-custom-input-content > .aospci-content--links > .field > .field__item > .ghost-link')
      .contains('Configure the ST5 ABS')
      .should('be.visible')
      .click();
    cy.wait(8000);
    


    //Configure the bike
  
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('button')
      .contains('Next step')
      .should('be.visible')
      .click();
  });
});
  