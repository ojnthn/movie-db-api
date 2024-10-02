import { MovieListFailure } from "../../../error/movie_list_failure";
import { MovieListEntity } from "../../entity/movie_list_entity";
import { MovieListRepository } from "../../repository/movie_list/movie_list_repository";
import { MovieListUsecase } from "./movie_list_usecase";

export class MovieListUsecaseImpl implements MovieListUsecase {
    constructor(private movieListRepository: MovieListRepository) {}

    async get(): Promise<MovieListEntity | MovieListFailure> {
        return await this.movieListRepository.getMovies();
    }
}