@SmokeTesting
Feature: Smoke testing of Seller and Buyer pages
    Background: Login
        Given I login to INX POC portal with POC smoke user

    Scenario: Verify the UI elements on Seller Company Brief page
        And I am on Seller Onboarding page

    Scenario: Verify the UI elements on buyer Company Brief page
        And I am on Buyer Onboarding page