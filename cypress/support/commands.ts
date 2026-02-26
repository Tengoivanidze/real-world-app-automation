/// <reference types="cypress" />

import { Login } from "../pom/login"; 


Cypress.Commands.add("restoreSession",  (username:string , password:string) =>{
const login = new Login();
login.signIn(username,password);

})