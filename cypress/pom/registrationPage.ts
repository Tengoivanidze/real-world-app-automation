import { RegisterCredentials } from "../interface/register_interface";

export class RegistrationPage {
  navigateToRegistrationPage() {
    cy.visit("http://localhost:3000/signup");
  }

  registerUser({
    firstName,
    lastName,
    username,
    password,
    confirmPassword,
  }: RegisterCredentials): void {
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
    cy.get("#username").type(username);
    cy.get("#password").type(password, { log: false });
    cy.get("#confirmPassword").type(confirmPassword, { log: false });

    cy.get('[data-test="signup-submit"]').click();
  }
}
