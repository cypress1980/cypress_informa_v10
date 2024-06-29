const locators = {
    "Send Invitation": '.ant-col-offset-20 > .ant-btn'
};

export default class Common {
    public static commonStep() {
        cy.log("You are in common.ts file");
    };

    public static clickOnText(text: any) {
        cy.contains(text).click();
    };

    public static verifyText(text: any) {
        cy.contains(text).should('be.visible');
    };

    public static buttonDisabled(buttonName: any) {
        cy.get(locators[buttonName]).should('be.disabled');
    };

    public static buttonEnabled(buttonName: any) {
        cy.get(locators[buttonName]).should('be.enabled');
    };

    public static clickOnButton(buttonName: any) {
        cy.get(locators[buttonName]).click();
    };
}