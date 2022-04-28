import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const loginPage = new loginPage();
const mainPage = new mainPage();
const posterPage = new posterPage();
let poster;
let posterName;

Given('I login with {string} username and {string} password', function(username, password){
    loginPage.launchLoginPage();
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.submitForm();
    cy.wait(1000);
})

When('I navigate to {string} page', function (pageName){
    mainPage.clickMenuItem(pageName);
    cy.contains(pageName).should("be.visible");
})

And('I click on the third item', function (){
    poster = posterPage.findElementInList(2);
    poster = poster.
    poster.click();
})