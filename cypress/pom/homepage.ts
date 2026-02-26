import { should } from "chai"

export class homePage{
  readonly  logo='.MuiTypography-root .NavBar-logo'
  readonly  bankNameInput = '#bankaccount-bankName-input';
  readonly routingNumberInput = '#bankaccount-routingNumber-input';
  readonly accountNumberInput = '#bankaccount-accountNumber-input';
  readonly firstname='giorgi'
  readonly lastname='ivanidze'
  readonly nextButton='[data-test="user-onboarding-next"]' 
  readonly saveButton = '[data-test="bankaccount-submit"]' 
  readonly  doneButton = '[data-test="user-onboarding-next"]' 



 verifyRealWorldAppLogo(){
    cy.get(this.logo).should('be.visible',{timeout:10000}) 
 }

fillBankData(bankName: string, routingNumber: string, accountNumber: string) {
    cy.get(this.bankNameInput).type(bankName);
    cy.get(this.routingNumberInput).type(routingNumber);
    cy.get(this.accountNumberInput).type(accountNumber);
  }
  
  visitHomePage(){
     cy.visit("http://localhost:3000/transaction/new");
  }

clickNextButton(){
  cy.get(this.nextButton).click()}

  clickSaveButton(){
    cy.get(this.saveButton).click()
  }
clickDoneButton(){
  cy.get(this.doneButton).click()
}


}