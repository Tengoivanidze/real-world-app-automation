declare namespace Cypress {
  interface Chainable {
    restoreSession(username: string, password: string): Chainable<void>;
  }
}