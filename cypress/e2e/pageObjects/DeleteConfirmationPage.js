class DeleteConfirmationPage{

    getConfirmationMessage(){return cy.get('b')}
    getContinueButton(){return cy.get('[data-qa="continue-button"]')}

}

export default DeleteConfirmationPage