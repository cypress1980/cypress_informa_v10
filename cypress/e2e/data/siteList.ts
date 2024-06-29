const siteList: Record<string, string> = {}

siteList['INX POC'] = 'inxchange.ingredientsnetwork';

export class SiteList {
    public static getSiteList(siteName : string) {
        return siteList[siteName];
    }
}