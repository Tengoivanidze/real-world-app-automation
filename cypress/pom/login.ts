export class Login {
  readonly Username = "#username";
  readonly Password = "#password";
  readonly signInButton = '[data-test="signin-submit"]';

  signIn(username: string, password: string) {
    cy.session([username], () => {
      cy.visit(Cypress.env("REAL_WORLD_APP_SIGN_IN"));

      cy.get(this.Username).should("be.visible").type(username);
      cy.get(this.Password).type(password, { log: false });
      cy.get(this.signInButton).click();

    

    });
  }
}
