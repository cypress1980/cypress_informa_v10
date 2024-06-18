import { Given } from "@badeball/cypress-cucumber-preprocessor";
import BuyerOnboarding from './buyerOnboarding';

Given('I am on Buyer Onboarding page',()=>{
    BuyerOnboarding.fillInput();
});