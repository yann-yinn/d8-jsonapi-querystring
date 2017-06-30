
declare module "d8-jsonapi-querystring" {
    interface jsonApiRequestObject {
        sort?: any,
        fields?: any,
        include?: string[],
        filter?: any,
        page?: any,
    }
    function buildQueryString(object: jsonApiRequestObject, stackedPath?: string, stringsParts?: any[]): string;
    export { jsonApiRequestObject, buildQueryString };
}
