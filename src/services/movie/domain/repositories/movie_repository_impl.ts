import { MovieListDatasource } from "../../list/data/datasource/movie_list/movie_list_datasource";
import { MovieListEntity } from "../entities/movie_list_entity";
import { MovieRepository } from "./movie_repository";

export class MovieRepositoryImpl implements MovieRepository {
    constructor(private datasource: MovieListDatasource) {}

    async getMovies(): Promise<MovieListEntity | Error> {
        return await this.datasource.getMovies().catch((error) => {
            throw error;
        });
    }
}