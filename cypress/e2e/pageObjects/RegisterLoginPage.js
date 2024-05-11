class RegisterLoginPage{

    getRegisterUsername(){return cy.get('[data-qa="signup-name"]')}
    getRegisterEmail(){return cy.get('[data-qa="signup-email"]')}
    getSignUpButton(){return cy.get('[data-qa="signup-button"]')}
    getLoginEmail(){return cy.get('[data-qa="login-email"]')}
    getLoginPassword(){return cy.get('[data-qa="login-password"]')}
    getLoginButton(){return cy.get('[data-qa="login-button"]')}

}

export default RegisterLoginPage