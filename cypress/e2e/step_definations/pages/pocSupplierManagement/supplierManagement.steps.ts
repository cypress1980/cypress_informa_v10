import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { SupplierManagement } from "./supplierManagement";

Then(/^I should see pop-up Invite Supplier$/, () => {
    SupplierManagement.popUpVisible();
});

When(/^I enter (.*) in Invite Supplier (.*) field$/, (fieldValue: any, fieldName: any) => {
    SupplierManagement.enterInputField(fieldValue, fieldName);
});

Then(/^I should see Supplier details at the end of list$/, (dataTable) => {
    SupplierManagement.verifyNewlyaddedSupplierDetails(dataTable);
});