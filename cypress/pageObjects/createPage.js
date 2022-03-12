class CreatePage {
    get titleInput() {
        return cy.get("input[id='title']")
    }

    get descriptionInput() {
        return cy.get("input[id='description']")
    }

    get imageUrlInput() {
        return cy.get("input[type='url']")
    }

    get submitButton() {
        return cy.get("button[type='submit']")
    }

    get error() {
        return cy.get('p[class="alert alert-danger"]')
    }

    get createTitle() {
        return cy.get('h1')
    }

    create(title, description, imageUrl) {
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imageUrlInput.type(imageUrl)
        this.submitButton.eq(0).click()
    }
}

export const createPage = new CreatePage()