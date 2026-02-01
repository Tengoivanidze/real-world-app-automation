describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('REAL_WORLD_APP_BASE_URL'))
    cy.pause()
  })
})