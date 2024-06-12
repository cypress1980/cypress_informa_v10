import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('I was on Google home page', ()=>{
    cy.visit('https://www.google.com/');
})