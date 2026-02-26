import { generateRandomUsername } from '../helpers/user_data_generator';
import { RegistrationPage } from "../pom/registrationPage";
import { generateRandomPassword } from '../helpers/user_data_generator';
import { Login } from '../pom/login';
import { generateRandomBankUsername } from '../helpers/randomnumbergenerator'; 
import { generateRandomRoutingNumber } from '../helpers/randomnumbergenerator';
import { generateRandomAccountNumber } from '../helpers/randomnumbergenerator';
import { homePage } from '../pom/homepage';
import "./commands";
const login = new Login()
const HomePage = new homePage()


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Cypress {
    registrationUsername: string;
    registrationPassword: string;
    }
  }
}

const registrationPage = new RegistrationPage()
Cypress.registrationUsername = generateRandomUsername()
Cypress.registrationPassword = generateRandomPassword()
const bankData = generateRandomBankUsername()
const bankRoutingNumber= generateRandomRoutingNumber().toString()
const bankNumber = generateRandomAccountNumber().toString()
const firstname='giorgi'
const lastname='ivanidze'
before(()=>{
  registrationPage.navigateToRegistrationPage()
  registrationPage.registerUser({
  firstName: `${firstname}`,
  lastName: `${lastname}`,
  username: `${ Cypress.registrationUsername}`,
  password: `${Cypress.registrationPassword}`,
  confirmPassword: `${Cypress.registrationPassword}`, 
  })
  cy.wait(1000)


  cy.visit(Cypress.env('REAL_WORLD_APP_SIGN_IN'));
  cy.restoreSession( Cypress.registrationUsername,Cypress.registrationPassword)


  cy.window().then((win) => {
      Object.keys(win.localStorage).forEach(key => cy.log(`${key}: ${win.localStorage.getItem(key)}`));

  Object.keys(win.sessionStorage).forEach(key => cy.log(`${key}: ${win.sessionStorage.getItem(key)}`));
});


   cy.visit('REAL_WORLD_APP_HOME');
  HomePage.clickNextButton()
  HomePage.fillBankData(bankData,bankRoutingNumber,bankNumber)
  HomePage.clickSaveButton()
  HomePage.clickDoneButton()

})


    
