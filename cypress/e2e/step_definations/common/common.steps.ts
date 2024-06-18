import { When } from "@badeball/cypress-cucumber-preprocessor";
import Common from './common';

When('I am performing common step', ()=>{
    Common.commonStep();
});