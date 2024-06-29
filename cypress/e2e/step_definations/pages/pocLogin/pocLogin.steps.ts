import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { PocLogin } from "./pocLogin";

Given(/^I login to (.*) prototype with (.*) user$/, (site: any, userName: any) => {
    PocLogin.userLogin(site, userName);
});