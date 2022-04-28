const {Given} = require('cypress-cucumber-preprocessor/steps');
const {When} = require('cypress-cucumber-preprocessor/steps');
const {Then} = require('cypress-cucumber-preprocessor/steps');
const {And} = require('cypress-cucumber-preprocessor/steps');
const {LoginPage} = require("../../../pageobjects/login_page");
const {MainPage} = require("../../../pageobjects/main_page");
const {CreateCustomerPage} = require("../../../pageobjects/create_customer_page");

const customerSubItem = '[href*="#/customers"]';

Given('Login with {string} username and {string} password', function(username, password){
    LoginPage.login(username, password);
})

When('I navigate to Customers page', function (){
    MainPage.clickMenuSubItem(customerSubItem);
    cy.wait(1000);
    cy.contains("Customers").should("be.visible");
})

And('I press on Create button', function (){
    cy.contains("Create").click();
    cy.contains("Create Customer").should("be.visible");
})

And('I enter FirstName as {string}', function (args){
    CreateCustomerPage.enterFirstName(args);
})

And('I enter LastName as {string}', function (args){
    CreateCustomerPage.enterLastName(args);
})

And('I enter Email as {string}', function (args){
    CreateCustomerPage.enterEmail(args);
})

And('I enter Birthday as {string}', function (args){
    CreateCustomerPage.enterBirthday(args);
})

And('I enter Address as {string}', function (args){
    CreateCustomerPage.enterAddress(args);
})

And('I enter City as {string}', function (args){
    CreateCustomerPage.enterCity(args);
})

And('I enter State as {string}', function (args){
    CreateCustomerPage.enterState(args);
})

And('I enter Password as {string}', function (args){
    CreateCustomerPage.enterPassword(args);
})

And('I enter Confirm password as {string}', function (args){
    CreateCustomerPage.enterConfirmPassword(args);
})

And('I press Save button', function (){
    CreateCustomerPage.pressSaveButton();
})

Then('I verify customer is created successfully', function (){
    MainPage.clickMenuSubItem(customerSubItem);
    let firstItem = cy.get('[class*="MuiTableBody"]').first();
    firstItem.should("contain.text", "Hang Do");
})