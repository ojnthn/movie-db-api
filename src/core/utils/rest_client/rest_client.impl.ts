import axios from "axios";
import { env } from "../../config/env";
import { RestClient } from "./rest_client";

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
            throw error;
        }            
    }        
}