import axios, { AxiosError } from "axios";
import { env } from "../../config/env";
import { RestClient } from "./rest_client";
import { Exception } from "../../errors/exception";

export class RestClientImpl implements RestClient {
    private apiKey: string;
    private baseUrl: string;

    constructor () {
        this.apiKey = env.theMovieDbApiKey!;
        this.baseUrl = `https://api.themoviedb.org/3`;
    }
    async get(url: string): Promise<any> {
        try {

            const { data } = await axios.get(`${this.baseUrl}${url}?api_key=${this.apiKey}`);            

            return data.results;
        } catch (error) {
            if (error instanceof AxiosError) {
                
                throw error.response?.data;
            }
            
            throw new Exception("Unknown error");
        }            
    }        
}