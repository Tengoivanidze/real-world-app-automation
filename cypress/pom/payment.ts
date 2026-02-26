
export class payment{
readonly newButton = '[data-test="nav-top-new-transaction"]';
readonly person = '.MuiPaper-root.MuiPaper-elevation [data-test="users-list"] .MuiListItem-root ';
readonly amountField = '#amount';
readonly addNoteField = '#transaction-create-description-input';
readonly requestButton = '[data-test="transaction-create-submit-request"]'
readonly payButton ='[data-test="transaction-create-submit-request"]';
readonly returnButton = '[data-test="new-transaction-return-to-transactions"]'


sendRequest(){
cy.get(this.newButton).click() 
cy.get(this.person)
.first()
.should('be.visible')
.click({ force: true })
cy.get(this.amountField).type('1000');
cy.get(this.addNoteField).type('business');
cy.get(this.requestButton).click();
cy.get(this.returnButton).click(); 
} 

pay(){
cy.get(this.newButton,{ timeout: 3000 })
.scrollIntoView().click()
cy.get(this.person)
.first()
.should('be.visible')
.click({ force: true })
cy.get(this.amountField).type('1000');
cy.get(this.addNoteField).type('business');
cy.get(this.payButton).click();
cy.get(this.returnButton).click();
}

}





