
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const loginPage = new loginPage();

Given('I open the homepage', function(){
    loginPage.launchLoginPage();
})

When('I enter {string} as username and {string} as password', function (username, password){
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
})

When('I press Sign In button', function (){
    loginPage.submitForm();
})

Then('I login successfully', function(){

})