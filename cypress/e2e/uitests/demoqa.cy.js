import textboxpage from '../pageobjects/textboxQA.po'
import data from '../../fixtures/demoqa.json'
/// <reference types="cypress"/>
const testbox = new textboxpage()
describe('elements functionalities', function () {
    before(function () {

        cy.fixture('demoqa').then(function (data) {
            this.data = data;
          })
        cy.visit('https://demoqa.com/');
        cy.wait(3000);
    })
    it('textbox functionalities', function () {
        cy.xpath("//h5[text()='Elements']").click();
        cy.wait(2000);
        cy.xpath('//span[text()="Text Box"]').click();
        cy.wait(2000);

        cy.entertext(testboxpage2.username2, this.data.fullname);
        cy.entertext(testboxpage2.email2, this.data.email);
        cy.entertext(testboxpage2.currentaddress, this.data.currentaddress);
        cy.entertext(testboxpage2.permenantaddress, this.data.permenantaddress);
        cy.clickonelement(testboxpage2.submitbtn);

    })
})