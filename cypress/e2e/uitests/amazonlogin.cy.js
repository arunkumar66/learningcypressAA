/// <reference types="cypress"/>
import amazonlogin from '../pageobjects/amazonlogin.po'
import data from '../../fixtures/amazon.json'


const amazlogin = new amazonlogin()
describe('login functionalities', () => {
    before(function () {
       
            cy.visit('https://www.amazon.in/');

        });
    })
    it('login functionality with valid credentials', function() {
        cy.xpath(amazlogin.signin()).click({ force: true });

        cy.wait(4000)
        cy.location().its('href').should('eq', data.signinurl)

        cy.xpath(amazlogin.signintext()).type(data.username)
        cy.xpath(amazlogin.continue()).click();
        cy.clickonelement(amazlogin.continue());
        cy.entertext(amazlogin.passwordtext(), data.password);
        cy.clickonelement(amazlogin.signinbtn())
    })
    it('searching product and add to cart', function(){
        cy.entertext(amazlogin.searchbtn(),'Redmi 9A');
        cy.clickonelement(amazlogin.thirdelement());
        cy.wait(4000);
        cy.clickonelement(amazlogin.results())
        cy.wait(2000);
        cy.clickonelement(amazlogin.addtocart());
    })
    it('test case for add to address and payment', function(){
        cy.clickonelement(amazlogin.proceedtopay());
        cy.wait(4000);
        cy.selectdropdownvalue(amazlogin.countrydropdown(), 'India').should('have.value', 'India');
        cy.entertext(amazlogin.fullname(), data.fullname);
        cy.entertext(amazlogin.mobilenumber(), data.mobilenumber);
        cy.entertext(amazlogin.pincode(), data.pincode);
        cy.entertext(amazlogin.flat(), data.streetnummber1);
        cy.enetertext(amazlogin.area(), data.streetnummber2);
        cy.entertext(amazlogin.landmark(), data.landmark);
        cy.entertext(amazlogin.city(), data.city);
        cy.selectdropdownvalue(amazlogin.countrydropdown(), '05').should('have.value', '05');
        cy.clickonelement(amazlogin.defaultaddress()).check();
        cy,selectdropdownvalue(amazlogin.addresstypedropdown).select('01');
        cy.clickonelement(amazlogin.useaddress());
    })

        

   


