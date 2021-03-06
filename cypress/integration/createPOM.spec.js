import { navigation } from '../pageObjects/navigation.js'
import { loginPage } from '../pageObjects/loginPage.js'
import { createPage } from '../pageObjects/createPage.js'

describe("create test", () => {
    beforeEach("visit gallery page", () => {
        cy.visit(" / ");
        navigation.clickLoginButton();
        loginPage.login('opacic83zo@gmail.com', 'opaciczo1412');
        navigation.clickCreateButton();
    });


    it("create gallery without title", () => {
        createPage.create(' ', 'cypress', 'https: //cdn.pulse2.com/cdn/2020/12/Cypress.png');

    });

    it("tite with 1 character", () => {
        createPage.create('c', 'cypress', 'https: //cdn.pulse2.com/cdn/2020/12/Cypress.png');

    });

    it("image without extension", () => {
        createPage.create('logo', 'cypress', 'https: //cdn.pulse2.com/cdn/2020/12/Cypress');

    })

    it("login with valid credentials", () => {
        createPage.create('logo', 'cypress', 'https: //cdn.pulse2.com/cdn/2020/12/Cypress.png');

    })
})