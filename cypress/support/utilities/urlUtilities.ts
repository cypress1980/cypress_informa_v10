import { SiteList } from "../../e2e/data/siteList";

export class UrlUtility {
    public static urlBuilder(site: string) {
        let finalUrl: string;
        let env = Cypress.env("environment");
        let siteUrl = SiteList.getSiteList(site);

        switch(env) {
            case 'dev': {
                finalUrl = 'https://dev-' + siteUrl + '.com/';
                break;
            };
            case 'test': {
                finalUrl = 'https://' + siteUrl + '.com/';
                break;
            }
        }

        return finalUrl;
    }
}