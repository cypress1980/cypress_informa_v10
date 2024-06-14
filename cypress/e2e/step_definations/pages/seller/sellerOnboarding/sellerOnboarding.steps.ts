import { Given } from "@badeball/cypress-cucumber-preprocessor";
import SellerOnboarding from './sellerOnboarding';

const seller_onboarding = new SellerOnboarding();

Given('I am on Seller Onboarding page',()=>{
    seller_onboarding.fillInput();
});