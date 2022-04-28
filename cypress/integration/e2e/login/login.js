//import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
const {Given} = require('cypress-cucumber-preprocessor/steps');
const {When} = require('cypress-cucumber-preprocessor/steps');
const {Then} = require('cypress-cucumber-preprocessor/steps');
const {And} = require('cypress-cucumber-preprocessor/steps');
const {LoginPage} = require("../../../pageobjects/login_page");

Given('I open the homepage', function(){
    LoginPage.launchLoginPage();
})

When('I enter {string} as username and {string} as password', function (username, password){
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
})


And('I press Sign In button', function (){
    LoginPage.submitForm();
})

Then('I login successfully with account {string}', function(name){
    cy.contains(name).should("be.visible")

})