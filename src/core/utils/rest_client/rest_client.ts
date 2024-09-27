export abstract class RestClient {
    abstract get(url: string): Promise<any>;
}