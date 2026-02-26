
//     //#1 constants on top level
//     //#2 useris monacemebi paroli da username gaitane .env fileshi, mere gamoidzaxe cypress config env seqciashi da iqidan wamoige cypress.env
//     // it am failishi wamoige usrname da password
//     // danarcheni monacemebi first name 


//   describe("sign in", () => {
//   it("register user", () => {
//     const user = {
//       FirstName: "giorgi",
//       LastName: "ivanidze",
//       username: "gio",
//       Password: "giogiogio12",
//       ConfirmPassword: "giogiogio12",
//     };

//     const selectors = {
//       FirstNameInput: "#firstName",
//       lastNameInput: "#lastName",
//       usernameInput: "#username",
//       passwordInput: "#password",
//       ConfirmPasswordInput: "#confirmPassword",
//       signInButton: '[data-test="signup-submit"]',
//     };

//     function openRegistrationPage() {
//       cy.visit("http://localhost:3000/signup");
//     }

//     function fillRegistrationForm(user: any) {
//       cy.get(selectors.FirstNameInput).type(user.FirstName);
//       cy.get(selectors.lastNameInput).type(user.LastName);
//       cy.get(selectors.usernameInput).type(user.username);
//       cy.get(selectors.passwordInput).type(user.Password);
//       cy.get(selectors.ConfirmPasswordInput).type(user.ConfirmPassword);
//     }
//     function clickSignInButton() {
//       cy.get(selectors.signInButton).click();
//     }
//     openRegistrationPage();
//     fillRegistrationForm(user);
//     clickSignInButton();
//   });
// });


// 🟢 POSITIVE TESTS (დადებითი)
// 1️⃣ Valid Login

// შეიყვანე სწორი username + password

// დააჭირე Sign In

// შეამოწმე:

// URL შეიცვალა (/dashboard)

// ჩანს Welcome მესიჯი


import { RegistrationPage } from "../pom/registrationPage";
import { generateRandomUsername } from "../helpers/user_data_generator";
import { Login } from "../pom/login";
import { includes } from "cypress/types/lodash";

const registrationPage = new RegistrationPage();
const login = new Login();

const firstname = "giorgi";
const lastname = "ivanidze";

let username: string;
let password: string;

describe("SignUp", () => {

  before(() => {
    username = generateRandomUsername();
    password = "password";

    registrationPage.navigateToRegistrationPage();

    registrationPage.registerUser({
      firstName: firstname,
      lastName: lastname,
      username: username,
      password: password,
      confirmPassword: password,
    });
  });

  it("should login with newly created user", () => {

    login.signIn(username, password);
  cy.url().should('includes','http://localhost:3000/')
  cy.contains('welcome').should('be.visible')
    
  });

});

