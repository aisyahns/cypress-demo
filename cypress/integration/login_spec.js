import data from '../fixtures/login.json'

describe('Login feature', () => {
    
    beforeEach('Same step', () =>{
        cy.visit('/');
        cy.get('.icon-user').click();
    })

    data.forEach(element => {
        it('Login with ' + element.expected, () => {
            if (element.username != '') cy.get('#username').type(element.username)
            if (element.password != '') cy.get('#password').type(element.password)
            cy.get('[name = login]').click()
            // if (element.expected == "success"){
            //     cy.get('#react-burger-menu-btn').should('be.visible')
            // }
            if (element.expected != 'valid data') {
                cy.get('.message-container').should('have.text', element.message);
            } else {
                cy.get('.icon-user').should('be.visible');
            }
        })
    })
})