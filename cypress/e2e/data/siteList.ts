const siteList: Record<string, string> = {}

siteList['INX POC'] = 'www.saucedemo';

export class SiteList {
    public static getSiteList(siteName : string) {
        return siteList[siteName];
    }
}