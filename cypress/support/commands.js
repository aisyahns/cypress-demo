// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, pass) =>{
    cy.visit('/');
    cy.get('.icon-user').click();
    cy.get('#username').type(email);
    cy.get('#password').type(pass);
    cy.get('[name = login]').click();
})

Cypress.Commands.add('addStock', (stock) => {
    let stockProduct = stock.split(' ')[0]
    if (parseInt(stockProduct) > 1){
        cy.get('.plus').click()
        cy.get('[name = quantity]').should('have.value', '2')
    }
})

Cypress.Commands.add('deleteCart', () => {
    cy.get('[class = icon-shopping-basket]').eq(0).click()
   if (cy.find('.remove').length > 0){
       cy.get('.remove').click()
   }
})
