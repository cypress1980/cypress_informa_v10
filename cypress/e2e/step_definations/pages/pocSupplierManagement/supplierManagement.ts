const locators = {
    "Name": "input[id='form_in_modal_name']",
    "Company Name": "input[id='form_in_modal_companyName']",
    "Email": "input[id='form_in_modal_email']"
}
export class SupplierManagement {
    public static popUpVisible() {
        cy.get('.ant-modal-content').should('be.visible');
    }

    public static enterInputField(fieldValue: any, fieldName: any) {
        cy.get(locators[fieldName]).type(fieldValue)
    }

    public static verifyNewlyaddedSupplierDetails(dataTable) {
        var tableValue: any;
        dataTable.hashes().forEach(elem => {
            for (var tableColumn in elem) {
                tableValue = elem[tableColumn]
                cy.get('.supplier-wrapper').last().contains(tableValue);
            }
        });
    }
}