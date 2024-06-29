import { UrlUtility } from "../../../../support/utilities/urlUtilities";
import { UserList } from "../../../data/userList";

export class PocLogin {

    public static userLogin(portalName: any, userName: any) {

        let siteURL = UrlUtility.urlBuilder(portalName);
        let UserName = UserList.getUserList(userName);
        const args = { UserName, siteURL };
        let origin = siteURL

        //cy.session(args, () => {

            //cy.origin(origin, { args }, ({ UserName, siteURL }) => {
      
              Cypress.on("uncaught:exception", (err, runnable) => {
      
                return false;
      
              });
      
              cy.visit(siteURL);
              cy.contains('Login').click();
              cy.frameLoaded('div[id="root"]>div>iframe')
              cy.iframe('div[id="root"]>div>iframe').xpath('//*[@id="loginBtn"]').click();
      
              cy.iframe('div[id="root"]>div>iframe').find('input[name="email"]').type(UserName);      
              cy.iframe('div[id="root"]>div>iframe').find('input[name="password"]').type("Buyer@123");
      
              cy.iframe('div[id="root"]>div>iframe').find('button[class="iiris-aThJd iiris-btn iiris-btn-block"]').eq(0).click();
              cy.wait(10000)
              //cy.reload();
      
            //});
      
            //cy.wait(50000);
      
        //});
    
    }

}