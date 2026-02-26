// 🟢 POSITIVE TESTS (დადებითი)
// 1️⃣ Valid Login

// შეიყვანე სწორი username + password

// დააჭირე Sign In

// შეამოწმე:

// URL შეიცვალა (/dashboard)



import { RegistrationPage } from "../pom/registrationPage";
import { Login } from "../pom/login";

const registrationPage = new RegistrationPage();
const login = new Login();

describe("SignUp", () => {

  
  it("should login with newly created user", () => {

    login.signIn(Cypress.registrationUsername, Cypress.registrationPassword);
    
    cy.url().should("includes", "http://localhost:3000/");
   
  });
});
