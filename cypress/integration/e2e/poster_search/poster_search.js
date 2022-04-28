const {Given} = require('cypress-cucumber-preprocessor/steps');
const {When} = require('cypress-cucumber-preprocessor/steps');
const {Then} = require('cypress-cucumber-preprocessor/steps');
const {And} = require('cypress-cucumber-preprocessor/steps');
const {LoginPage} = require("../../../pageobjects/login_page");
const {MainPage} = require("../../../pageobjects/main_page");

const searchTxb = '[type="text"]';
const resultRow = '[class="MuiTablePagination-displayedRows css-1chpzqh"]';


Given('I login with {string} username and {string} password', function(username, password){
    LoginPage.login(username, password);
})

When('I navigate to Posters page', function (){
    MainPage.clickMenuSubItem('[href*="#/products"]');
    cy.contains("Posters").should("be.visible");
})

And('I search for {string} poster', function (posterName){
    cy.get(searchTxb).type(posterName);
    cy.wait(1000);
})

Then('I verify the search result', function(){
    cy.get(resultRow).should(
        "have.text",
        "1-1 of 1"
    );
})