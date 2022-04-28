/// <reference types="cypress" />
const targetedUrl = 'https://marmelab.com/react-admin-demo'
const usernameTxt = '[name*="username"]'
const passwordTxt = '[name*="password"]'
const signinBtn = '[type*="submit"]'

export const LoginPage = {
    launchLoginPage () {
        cy.visit(targetedUrl)
    },
    enterUsername (args) {
        cy.get(usernameTxt)
            .click()
            .clear()
            .type(args)
    },
    enterPassword (args) {
        cy.get(passwordTxt)
            .click()
            .clear()
            .type(args)
    },
    submitForm () {
        cy.get(signinBtn).click()
    },

    login(username, password){
        LoginPage.launchLoginPage();
        LoginPage.enterUsername(username);
        LoginPage.enterPassword(password);
        LoginPage.submitForm();
        cy.wait(1000);
    }
}