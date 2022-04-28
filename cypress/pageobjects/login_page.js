/// <reference types="cypress" />
const targetedUrl = 'https://marmelab.com/react-admin-demo'
const usernameTxt = '[name*="username"]'
const passwordTxt = '[name*="password"]'
const signinBtn = '[type* = "submit"]'

class LoginPage {
    launchLoginPage () {
        cy.visit(targetedUrl)
    }
    enterUsername (args) {
        cy.get(usernameTxt)
            .click()
            .clear()
            .type(args)
    }
    enterPassword (args) {
        cy.get(passwordTxt)
            .click()
            .clear()
            .type(args)
    }
    submitForm () {
        cy.contains(signinBtn).click()
    }
}