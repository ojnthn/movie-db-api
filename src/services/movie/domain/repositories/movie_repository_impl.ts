import { MovieListDatasource } from "../../list/data/datasource/movie_list/movie_list_datasource";
import { MovieListModel } from "../../list/data/model/movie_list_model";
import { MovieRepository } from "./movie_repository";

export class MovieRepositoryImpl implements MovieRepository {
    constructor(private datasource: MovieListDatasource) {}

    async getMovies(): Promise<MovieListModel | Error> {
        return await this.datasource.getMovies().catch((error) => {
            return new Error(error.message);
        });
    }
}