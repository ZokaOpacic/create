import { navigation } from '../pageObjects/navigation.js'
import { loginPage } from '../pageObjects/loginPage.js'

describe('login case', () => {
    it("visit gall page", () => {
        cy.visit("/")
        navigation.clickLoginButton()
    })

    it("login with valid credentials", () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {

        }).as('validLogin')
        loginPage.login('opacic83zo@gmail.com', 'opaciczo1412')
        cy.wait('@validLogin').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
                //expect(request.response.statusCode).to.eql(200)
        })
    })
})