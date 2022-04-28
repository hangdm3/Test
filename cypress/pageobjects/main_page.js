export const MainPage = {
    clickMenuSubItem(args){
        cy.get(args).click();
        cy.wait(1000);
    }
}