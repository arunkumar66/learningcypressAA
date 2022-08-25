import textboxpage from '../pageobjects/textboxQA.po'
import data from '../../fixtures/demoqa.json'
/// <reference types="cypress"/>
const testboxpage2 = new textboxpage()
describe('elements functionalities', function () {
    before(function () {
        
        cy.visit('https://demoqa.com/');
        cy.xpath("//h5[text()='Elements']").click();
        cy.wait(300);
    })
    it('textbox functionalities', function () {
        cy.entertext(testboxpage2.username2, data.fullname);
        cy.entertext(testboxpage2.email2, data.email);
        cy.entertext(testboxpage2.currentaddress, data.currentaddress);
        cy.entertext(testboxpage2.permenantaddress, data.permenantaddress);
        cy.clickonelement(testboxpage2.submitbtn);

    })
})
it('checkbox fuctionalities', function(){
    
})