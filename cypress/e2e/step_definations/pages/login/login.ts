import { UrlUtility } from "../../../../support/utilities/urlUtilities";
import { UserList } from "../../../data/userList";

export class Login {

    public static userLogin(portalName: any, userName: any) {

        let siteURL = UrlUtility.urlBuilder(portalName);
        let UserName = UserList.getUserList(userName);
        const args = { UserName, siteURL };
        let origin = "https://" + siteURL + ".com/"

        //cy.session(args, () => {

            //cy.origin(origin, { args }, ({ UserName, siteURL }) => {
      
              Cypress.on("uncaught:exception", (err, runnable) => {
      
                return false;
      
              });
      
              cy.visit(siteURL);
      
              cy.get('input[id="user-name"]').type(UserName);      
              cy.get('input[id="password"]').type("secret_sauce");
      
              cy.contains("Login").click();
      
            //});
      
            //cy.wait(50000);
      
        //});
    
    }

}