import amazonlogin from '../pageobjects/amazonlogin.po'


/// <reference types="cypress"/>
const amazlogin = new amazonlogin()
describe('login functionalities', () => {
    before(function () {
        cy.fixture('amazon').then(function (data) {
            this.data = data
            cy.visit('https://www.amazon.in/');

        });
    })
    it('login functionality with valid credentials', function() {
        cy.xpath(amazlogin.signin()).click();

        cy.wait(4000)
        cy.url().should('eq', 'https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26ext_vrnc%3Dhi%26tag%3Dgooghydrabk1-21%26ref%3Dnav_ya_signin%26adgrpid%3D58075519359%26hvpone%3D%26hvptwo%3D%26hvadid%3D486462756371%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D11099064136092894487%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9061989%26hvtargid%3Dkwd-64107830%26hydadcr%3D14452_2154371%26gclid%3DCj0KCQjw0JiXBhCFARIsAOSAKqDVexo4BtPxYxwbbYO1t_5wjVjoyv51lGL8eyQ6QDPWbPTq01HeGFgaAoJ3EALw_wcB&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&')

        cy.xpath(amazlogin.signintext()).type(this.data.username)
        cy.xpath(amazlogin.continue()).click();
        

    })


})