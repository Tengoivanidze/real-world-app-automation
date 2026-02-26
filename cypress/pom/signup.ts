class signup{
     FirstNameInput= "#firstName";
      lastNameInput= "#lastName";
      usernameInput= "#username";
      passwordInput= "#password";
      ConfirmPasswordInput= "#confirmPassword";
      signInButton= '[data-test="signup-submit"]';




 openRegistrationPage() {
      cy.visit("http://localhost:3000/signup");
    }

    
   fillRegistrationForm(user: any) {
      cy.get(this.FirstNameInput).type(user.FirstName);
      cy.get(this.lastNameInput).type(user.LastName);
      cy.get(this.usernameInput).type(user.username);
      cy.get(this.passwordInput).type(user.Password);
      cy.get(this.ConfirmPasswordInput).type(user.ConfirmPassword);
    }
       clickSignInButton() {
      cy.get(this.signInButton).click();
    }

}


