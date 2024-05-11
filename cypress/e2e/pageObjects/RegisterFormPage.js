class RegisterFormPage{

    getGenderMr(){return cy.get('#uniform-id_gender1')}
    getGenderMs(){return cy.get('#uniform-id_gender2')}
    getName(){return cy.get('[data-qa="name"]')}
    getEmail(){return cy.get('[data-qa="email"]')}
    getPassword(){return cy.get('[data-qa="password"]')}
    getDropdownDayDOB(){return cy.get('#uniform-days')}
    getDayDOB(){return cy.get('#days option')}
    getMonthDOB(){return cy.get('#months option')}
    getYearDOB(){return cy.get('#years option')}
    getSelectNewsletter(){return cy.get('#newsletter')}
    getReceiveSpecialOffers(){return cy.get('#optin')}
    getFirstName(){return cy.get('[data-qa="first_name"]')}
    getLastName(){return cy.get('[data-qa="last_name"]')}
    getCompany(){return cy.get('[data-qa="company"]')}
    getAddress(){return cy.get('[data-qa="address"]')}
    getAddress2(){return cy.get('[data-qa="address2"]')}
    getCountry(){return cy.get('[data-qa="country"]')}
    getState(){return cy.get('[data-qa="state"]')}
    getCity(){return cy.get('[data-qa="city"]')}
    getZipCode(){return cy.get('[data-qa="zipcode"]')}
    getMobileNumber(){return cy.get('[data-qa="mobile_number"]')}
    getCreateAccount(){return cy.get('[data-qa="create-account"]')}

}

export default RegisterFormPage