// <reference types="cypress" />

describe('Validate login Functionality', () =>{

    it('login with valid credentials', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.get("#txtUsername").type("Admin")
        cy.get("#txtPassword").type('admin123')
        cy.get('#btnLogin').click();
        cy.url().should('include','/index.php/dashboard')
    })
it('login with invalid credentials', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.get("#txtUsername").type("Admin")
        cy.get("#txtPassword").type('admin1233')
        cy.get('#btnLogin').click();

        cy.get('#spanMessage').should('be.visible');
    })
    })
