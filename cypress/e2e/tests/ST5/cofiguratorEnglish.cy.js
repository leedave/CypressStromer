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
    // cy.wait(8000);
    


    //Configure the bike
  
    cy.get('[for="Rahmengrösse_m0"]', { timeout: 20000 })
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st5aggspm0.jpg');
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.wait(3000);
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]', { timeout: 20000 })
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('button')
      .contains('Next step')
      .should('be.visible')
      .click();
    cy.get('.invoiceFooter > .configuratorButton')
      .contains('Next step')
      .should('be.visible')
      .click();
    cy.get(':nth-child(3) > .extraCounter > .confInputIntPlusMinusContainer > .confInputIntPlusMinusButtonPlus')
      .should('be.visible')
      .click({ force: true });
    cy.get(':nth-child(7) > .extraCounter > .confInputIntPlusMinusContainer > .confInputIntPlusMinusButtonPlus')
      .should('be.visible')
      .click({ force: true });
    cy.get('.extrasInvoice > .configuratorButton')
      .contains('Next step')
      .should('be.visible')
      .click();
  });
});
  