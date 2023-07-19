describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })
  describe('My First Test', () => {
    it('Take a look at our E-bikes', () => {
      cy.visit('https://www.stromerbike.com/')
    })
  })