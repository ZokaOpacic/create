import { navigation } from '../pageObjects/navigation.js'
import { loginPage } from '../pageObjects/loginPage.js'
import { createPage } from '../pageObjects/createPage.js'

describe("create test", () => {
    beforeEach("visit gallery page", () => {
        cy.visit(" / ");
        cy.url().should('include', 'gallery-app');
        navigation.logoutButton.should('not.exist');
        navigation.clickLoginButton();
        loginPage.login('opacic83zo@gmail.com', 'opaciczo1412');
        cy.url().should('include', '/login');
        navigation.clickCreateButton();
    });


    it("create gallery without title", () => {
        createPage.create(' ', 'cypress', 'https: //cdn.pulse2.com/cdn/2020/12/Cypress.png');
        navigation.loginButton.should('not.exist');
        createPage.createTitle.should('have.text', 'Create Gallery');
        createPage.error.should('be.visible');
        createPage.error.should('have.text', 'The title field is required.');
        createPage.error.should('have.css', 'background-color', 'rgb(248, 215, 218)');

    });

    it("tite with 1 character", () => {
        createPage.create('c', 'cypress', 'https: //cdn.pulse2.com/cdn/2020/12/Cypress.png');
        createPage.error.should('be.visible');
        createPage.error.should('have.text', 'The title must be at least 2 characters.');

    });

    it("image without extension", () => {
        createPage.create('logo', 'cypress', 'https: //cdn.pulse2.com/cdn/2020/12/Cypress');
        createPage.error.should('be.visible');
        createPage.error.should('have.text', 'Wrong format of image');

    })

    it("login with valid credentials", () => {
        createPage.create('logo', 'cypress', 'https: //cdn.pulse2.com/cdn/2020/12/Cypress.png');

    })


})