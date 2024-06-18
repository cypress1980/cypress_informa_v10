import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "./login";

Given(/^I login to (.*) portal with (.*) user$/,(site: any, userName: any)=>{
    Login.userLogin(site, userName);
})