/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage"
import RegisterLoginPage from "../pageObjects/RegisterLoginPage"
import RegisterFormPage from "../pageObjects/RegisterFormPage";
import RegisterConfirmationPage from "../pageObjects/RegisterConfirmationPage";
import DeleteConfirmationPage from "../pageObjects/DeleteConfirmationPage";
const {Given, When, Then, BeforeAll} = require("@badeball/cypress-cucumber-preprocessor")

BeforeAll(function () {
    cy.fixture("registerUser.json").then(function(data){
        this.data = data
    })
  });

  var homePage = new HomePage()
  var registerLoginPage = new RegisterLoginPage()
  var registerFormPage = new RegisterFormPage()
  var registerConfirmationPage = new RegisterConfirmationPage()
  var deleteConfirmationPage = new DeleteConfirmationPage()

Given('the user visits the homepage', function(){
    cy.visit(Cypress.env('baseUrl'))
})

Given('goes to the Login\\/Register section', function(){
    homePage.getRegisterLoginButton().click()
})

When('the user enters a valid username and email', function(){
    registerLoginPage.getRegisterUsername().type(this.data.name)
    registerLoginPage.getRegisterEmail().type(this.data.email)
    registerLoginPage.getSignUpButton().click()
})

When('submits a valid registration form', function(){

    registerFormPage.getGenderMr().click()
    registerFormPage.getName().should('have.value', this.data.name)
    registerFormPage.getEmail().should('have.value', this.data.email)
    registerFormPage.getPassword().type(this.data.password)
    registerFormPage.getDropdownDayDOB().click()
    registerFormPage.getDayDOB().each(($el, index, $list)=>{

        if($el.text() === this.data.dayOfBirth){
            cy.log($el.text())
            cy.wrap($el).click({force:true})
        }

    })
    
    registerFormPage.getMonthDOB().each(($el, index, $list)=>{

        if($el.text() === this.data.monthOfBirth){
            cy.log($el.text())
            cy.wrap($el).click({force:true})
        }

    })

    registerFormPage.getYearDOB().each(($el, index, $list)=>{

        if($el.text() === this.data.yearOfBirth){
            cy.log($el.text())
            cy.wrap($el).click({force:true})
        }

    })

    registerFormPage.getSelectNewsletter().click()
    registerFormPage.getReceiveSpecialOffers().click()
    registerFormPage.getFirstName().type(this.data.name)
    registerFormPage.getLastName().type(this.data.lastName)
    registerFormPage.getCompany().type(this.data.company)
    registerFormPage.getAddress().type(this.data.address)
    registerFormPage.getAddress2().type(this.data.address2)
    registerFormPage.getCountry().each(($el, index, $list)=>{

        if($el.text() === this.data.country){
            cy.log($el.text())
            cy.wrap($el).click({force:true})
        }

    })

    registerFormPage.getState().type(this.data.state)
    registerFormPage.getCity().type(this.data.city)
    registerFormPage.getZipCode().type(this.data.zipcode)
    registerFormPage.getMobileNumber().type(this.data.mobileNumber)
    registerFormPage.getCreateAccount().click()

})

Then('the account is created', function(){
    registerConfirmationPage.getConfirmationMessage().should('have.text', this.data.registerConfirmationMessage)
})

Then('the account is deleted', function(){
    registerConfirmationPage.getContinueButton().click()
    homePage.getDeleteAccountButton().click()
    deleteConfirmationPage.getConfirmationMessage().should('have.text', this.data.deleteConfirmationMessage)

})
