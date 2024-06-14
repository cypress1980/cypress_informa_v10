import { Given } from "@badeball/cypress-cucumber-preprocessor";
import BuyerOnboarding from './buyerOnboarding';

const buyer_onboarding = new BuyerOnboarding();

Given('I am on Buyer Onboarding page',()=>{
    buyer_onboarding.fillInput();
});