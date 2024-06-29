@SupplierManagement
Feature: Prototype Buyers
    Background: Login to Prototype
        Given I login to INX POC prototype with POC User 1 user
        When I click on Supplier Management text

    Scenario: Validate the UI elements on buyers Supplier Management
        Then I should see text Supplier Management
        And I should see text Invite Supplier

    Scenario: Validate Invite Supplier functionality
        When I click on Invite Supplier text
        Then I should see pop-up Invite Supplier
        And I should see Send Invitation button disabled
        When I enter testing in Invite Supplier Name field
        And I enter test in Invite Supplier Company Name field
        And I enter testing3@gmail.com in Invite Supplier Email field
        Then I should see Send Invitation button enabled
        When I click on Send Invitation button
        Then I should see text Invitation sent successfully