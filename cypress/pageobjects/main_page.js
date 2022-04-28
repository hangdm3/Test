export const mainPage = {
    clickMenuItem(args){
        cy.contains(args).click();
        cy.wait(1000);
    }
}