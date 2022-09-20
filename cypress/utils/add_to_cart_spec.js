import { parsePrice } from "./utils"

describe('Add product to cart', () => {

    before('pre-condition', ()=> {
        cy.login(Cypress.env('email'), Cypress.env('password'))
    })

    it('add product', () =>{
        cy.contains('Shop All').click()
        cy.get('.col-inner > .product-small > .box-text > .title-wrapper > .name > .woocommerce-LoopProduct-link').eq(1).click()
        cy.get('.product-info > .product-title').invoke('text').as('name')
        cy.get(':nth-child(5) > .price > .woocommerce-Price-amount > bdi').invoke('text').as('price')
        cy.get('.stock').invoke('text').as('stock')
        .then((stock) => {
            cy.addStock(stock)
        })
        cy.get('.single_add_to_cart_button').click()
        
        cy.get('[class = icon-shopping-basket]').eq(0).click()

        cy.get('@name').then((name) => {
            cy.get('.product-name > a').invoke('text').should('to.be.equals', name.replace('\n', ''))
        })

        cy.get('@price').then((price) => {
            cy.log(price)
            cy.get('.product-subtotal > .woocommerce-Price-amount > bdi').invoke('text').as('totalPrice')
            cy.get('@totalPrice').then((totalPrice) =>{
                cy.log(totalPrice)
                assert.exists(parsePrice(totalPrice), 2 * parsePrice(price))
            })
        })
    })
})