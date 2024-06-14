import { When } from "@badeball/cypress-cucumber-preprocessor";
import Common from './common';

const common_steps = new Common();

When('I am performing common step', ()=>{
    common_steps.commonStep();
});