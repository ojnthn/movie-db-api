import { RestClientImpl } from "../../../../core/utils/rest_client/rest_client.impl";
import { GenreListEntity } from "../../domain/entity/genre_list_entity";
import { GenreListException } from "../../error/genre_list_exception";
import { GenreListModel } from "../model/genre_list_model";
import { GenreListDatasource } from "./genre_list_datasource";

export class GenreListDatasourceImpl implements GenreListDatasource {
    async getGenres(): Promise<GenreListEntity>{
        const restClient = new RestClientImpl();

        try{
            const genreJson = await restClient.get('/genre/movie/list');

            return GenreListModel.fromJson(genreJson.genres);
        } catch(error) {
            if(error instanceof Error) {
                throw GenreListException.from(error);
            }

            throw GenreListException.from(new Error('Unexpected error'));
        }
    } 
}