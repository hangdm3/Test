export const posterPage = {
    findElementInList(args){
        return cy.get('[class*="MuiImageList-root MuiImageList-standard css-tidt1y"]').eq(args);
    }

}