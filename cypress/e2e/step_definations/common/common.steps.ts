import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Common from './common';

When('I am performing common step', () => {
    Common.commonStep();
});

When(/^I click on (.*) text$/, (text: any) => {
    Common.clickOnText(text);
});

Then(/^I should see text (.*)$/, (text: any) => {
    Common.verifyText(text);
});

Then(/^I should see (.*) button disabled$/, (buttonName: any) => {
    Common.buttonDisabled(buttonName);
});

Then(/^I should see (.*) button enabled$/, (buttonName: any) => {
    Common.buttonEnabled(buttonName);
});

When(/^I click on (.*) button$/, (buttonName: any) => {
    Common.clickOnButton(buttonName);
});