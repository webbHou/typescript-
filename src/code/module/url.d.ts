//外部模块
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parseUrl(urlStr: string, parseQueryString?, slashesDenoteHost?): string[];
}