import { payment } from "../pom/payment";
import { homePage } from "../pom/homepage";

const HomePage = new homePage();
const Payment = new payment();

describe("payment", () => {
  beforeEach(() => {
    cy.log('test cases before each start')
    cy.restoreSession(
      Cypress.registrationUsername,
      Cypress.registrationPassword,
    );
   HomePage.visitHomePage()
  });

  it("request", () => {
    cy.log('test cases starrt')
    Payment.sendRequest();
  });
  
  it("pay", () => {
    Payment.pay();
  });
});
