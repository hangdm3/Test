/// <reference types="cypress" />
const targetedUrl = 'https://marmelab.com/react-admin-demo'
const usernameTxt = '[name*="username"]'
const passwordTxt = '[name*="password"]'
const signinBtn = '[type* = "submit"]'

export const loginPage = {
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
        cy.contains(signinBtn).click()
    },

    signIn () {
        cy.fixture('testdata').then((data) => {
            this.enterUsername(data.username)
            this.enterPassword(data.password)
            this.submitForm()
            cy.wait(1000)
        })
    },

    verifyLoginSuccess () {
        cy.fixture('testdata').then((data) => {
            cy.contains(data.account).should('exist')
        })
    }
}