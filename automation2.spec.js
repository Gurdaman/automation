describe('Automation Test Store', () => {
    before(() => {
        Cypress.env('projectId', 'xdkwv7')
    })

    it('should log in, navigate to a category page, view a product, add to cart, checkout, and verify order', () => {
        // Visit the website
        cy.visit('https://automationteststore.com')

        // Login
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#loginFrm_loginname').type('Gurdaman')
        cy.get('#loginFrm_password').type('Daman4441')
        cy.get('[title="Login"]').click()

        // Navigate to a category page and verify landing
        cy.get('#categorymenu > nav > ul > li:nth-child(2) > a').click()
        cy.url().should('include', 'path=68')

        // View a product and verify title
        cy.get('a.prdocutname[title="Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie"]')
        .click()
        .url().should('include', 'product_id=121')
      

        // Increase QTY and add to cart
        cy.get('input#product_quantity')
        .clear()
        .type('4')

        cy.contains('Add to Cart').click();


        // Navigate to shopping cart and checkout
        cy.get('#main_menu_top')
        .invoke('css', 'display', 'block')
        .find('.menu_text')
        .contains('Cart')
        .click()

        cy.title().should('eq', 'Shopping Cart')
        cy.get('#main_menu_top')
        .invoke('css', 'display', 'block')
        .find('.top.menu_checkout')
        .click()


        // Verify checkout confirmation and process order        
        cy.contains('Confirm Order').click()


        // Click on Confirm Order button
        cy.get('#checkout_btn').click()

        cy.get('a[href="https://automationteststore.com/"][title="Continue"]').click()


        // Verify order under account
        cy.get('div.menu_text').should('contain', 'Welcome back Gurdaman').click()
        cy.get('.dash-tile-header:contains("Order history") .btn').click()








    
    })
})
