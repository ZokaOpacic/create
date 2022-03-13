import { navigation } from '../pageObjects/navigation.js'
import { loginPage } from '../pageObjects/loginPage.js'
import { createPage } from '../pageObjects/createPage.js'

describe("create gall", () => {
    before(() => {
        cy.loginTroughBackend('opacic83zo@gmail.com', 'opaciczo1412')
    })

    it('visit default url', () => {
        cy.visit('/');
        navigation.loginButton.should('not.exist');
    })

})