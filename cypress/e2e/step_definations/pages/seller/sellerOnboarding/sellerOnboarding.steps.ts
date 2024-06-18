import { Given } from "@badeball/cypress-cucumber-preprocessor";
import SellerOnboarding from './sellerOnboarding';

Given('I am on Seller Onboarding page',()=>{
    SellerOnboarding.fillInput();
});