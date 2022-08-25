import registerpage from '../../pageobjects/register.po'

/// <reference types="cypress"/>
const register = new registerpage()
describe('login functionalities', function () {
    before(function () {
        cy.fixture('register').then(function (data) {
            this.data = data
        })
        cy.visit(Cypress.env("cleanturl"));
    })
    it('creating redifemail', function () {

        cy.xpath(register.fullname()).type(this.data.fullname)
        //cy.wait(3000)
        // cy.get(register.redifmailID()).type(this.data.redifmail)
        // cy.get(register.checkbutton()).click()
        // cy.get(register.errormessage()).should('be.visible')
        cy.get(register.password()).first().type(this.data.password)
        cy.get(register.password()).eq(1).type(this.data.password)

        //cy.get(register.alternativeemail()).type(this.data.alternativeemail)
        //cy.get(register.checkboxalteremail()).click();
        cy.get(register.dropdownhintq()).select('02').should('have.value', '02')
        cy.get(register.hintanswer()).type(this.data.hintanswer)
        cy.get(register.mothername()).type(this.data.mothername)
        cy.get(register.dropdownmobilenum()).select('04').should('have.value', ('04'))
        cy.get(register.mobilenum()).type(this.data.mobilenum)
        cy.get(register.day()).select('05').should('have.value', '05')
        cy.get(register.month()).select('MAR').should('have.value', 'MAR')
        cy.get(register.year()).select('1996').should('have.value', '1996')

        cy.get('[type="radio"]').check('Male')
        cy.get(register.country()).select('99').should('have.value', '99')
        cy.get(register.city()).select('bangalore').should('have.value', 'bangalore')
    })
})

