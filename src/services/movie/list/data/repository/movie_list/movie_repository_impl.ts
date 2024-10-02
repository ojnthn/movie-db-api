import { MovieListDatasource } from "../../datasource/movie_list/movie_list_datasource";
import { MovieRepository } from "../../../domain/repository/movie_list/movie_repository";
import { MovieListEntity } from "../../../domain/entity/movie_list_entity";
import { MovieListFailure } from "../../../error/movie_list_failure";
import { MovieListException } from "../../../error/movie_list_exception";


export class MovieRepositoryImpl implements MovieRepository {
    constructor(private datasource: MovieListDatasource) {}

    async getMovies(): Promise<MovieListEntity | MovieListFailure> {
        return await this.datasource.getMovies().catch((error: MovieListException) => {
           return MovieListFailure.fromException(error);
        });
    }
}