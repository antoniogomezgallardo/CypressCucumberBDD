@RegisterUser
Feature: Register User

    @register @regression
    Scenario: Register a valid User
    Given the user visits the homepage
    And goes to the Login/Register section
    When the user enters a valid username and email 
    And submits a valid registration form
    Then the account is created

    @registerAndDelete
    Scenario: Register a valid User and delete account
    Given the user visits the homepage
    And goes to the Login/Register section
    When the user enters a valid username and email 
    And submits a valid registration form
    Then the account is created
    And the account is deleted

    
    