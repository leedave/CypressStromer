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

//Select a  ST1 E-bike

  it('Your Stromer -> ST1', function () {
    cy.get('#block-menureferencesbycountry > :nth-child(2) > :nth-child(2) > :nth-child(1)')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/en/configurator-model-select');
    });
  
    cy.get(':nth-child(2) > .paragraph--type--aospcc01 > .container > :nth-child(1) > .col-lg-12 > .grid-container > .row > :nth-child(4) > .str-custom-input-wrapper > .str-custom-input > .str-custom-input-inner > .str-custom-input-content > .aospci-content--links > .field > .field__item > .ghost-link')
      .trigger('mouseover')
      .should('be.visible')
      .click();
  });
});
 
// Configure the bike ST1
// Frame Color Light Grey
// 8 Options

// Option 1

    cy.get('')
      .should('be.visible')
      .click();
    cy.get('').should('have.prop', 'src', '');