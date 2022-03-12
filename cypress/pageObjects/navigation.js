class Navigation {
    get registerButton() {
        return cy.get('a[href="/register"]')
    }

    get loginButton() {
        return cy.get('a[href="/login"]')
    }

    get createButton() {
        return cy.get('a[href="/create"]')
    }

    get logoutButton() {
        return cy.get(".nav-link").eq(3)
    }

    clickRegisterButton() {
        this.registerButton.click()
    }

    clickLoginButton() {
        this.loginButton.click()
    }

    clickCreateButton() {
        this.createButton.click()
    }

    clickLogoutButton() {
        this.logoutButton.click()
    }
}

export const navigation = new Navigation()