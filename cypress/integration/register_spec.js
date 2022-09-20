import { beforeEach } from "mocha";
import { randomEmail } from "../utils/utils"
import data from "../fixtures/register.json";

describe('Register feature', () => {

    beforeEach('Same step', () => {
        cy.visit('/');
        cy.get('.icon-user').click();
        cy.get('Select').eq(0).select('Puzzle');
        cy.get('Select').eq(1).select('PC');
        cy.get('Select').eq(2).select('Gadgets & Technology');
    })

    data.forEach(element => {
        it('Register with ' + element.expected , () => {
            if (element.email == 'random') element.email = randomEmail();
            if (element.email != '') cy.get('#reg_email').type(element.email);
            if (element.password != '') cy.get('#reg_password').type(element.password);
            if (element.confirm_pass != '') cy.get('#reg_confirm_password').type(element.confirm_pass);
            if (element.expected == 'low pass' || element.expected == 'weak pass') {
                cy.get('.woocommerce-Button').should('have.disabled', 'disabled');
            } else {
                cy.get('.woocommerce-Button').click();
                cy.get('.message-container').should('have.text', element.message);
            }
        })
    })

})