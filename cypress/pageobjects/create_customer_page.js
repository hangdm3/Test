const firstNameTxb = '[id="first_name"]';
const lastNameTxb = '[id="last_name"]';
const email = '[id="email"]';
const birthday = '[id="birthday"]';
const address = '[id="address"]';
const city = '[id="city"]';
const state = '[id="stateAbbr"]';
const zipcode = '[id="zipcode"]';
const password = '[id="password"]';
const confirmPassword = '[id="confirm_password"]';
const saveBtn = '[type="submit"]';

export const CreateCustomerPage = {
    enterFirstName(args){
        cy.get(firstNameTxb).type(args);
    },

    enterLastName(args){
        cy.get(lastNameTxb).type(args);
    },

    enterEmail(args){
        cy.get(email).type(args);
    },

    enterBirthday(args){
        cy.get(birthday).type(args);
    },

    enterAddress(args){
        cy.get(address).type(args);
    },

    enterCity(args){
        cy.get(city).type(args);
    },

    enterState(args){
        cy.get(state).type(args);
    },

    enterZipCode(args){
        cy.get(zipcode).type(args);
    },

    enterPassword(args){
        cy.get(password).type(args);
    },

    enterConfirmPassword(args){
        cy.get(confirmPassword).type(args);
    },

    pressSaveButton(){
        cy.get(saveBtn).click();
        cy.wait(1000);
    }
}