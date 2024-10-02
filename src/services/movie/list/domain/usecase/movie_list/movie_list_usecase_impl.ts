import { MovieListFailure } from "../../../error/movie_list_failure";
import { MovieListEntity } from "../../entity/movie_list_entity";
import { MovieListRepository } from "../../repository/movie_list/movie_list_repository";

export class MovieListUsecaseImpl {
    constructor(private movieListRepository: MovieListRepository) {}

    async get(): Promise<MovieListEntity | MovieListFailure> {
        return await this.movieListRepository.getMovies();
    }
}