import { MovieListDatasourceImpl } from "./data/datasource/movie_list/movie_list_datasource_impl";
import { MovieListRepositoryImpl } from "./data/repository/movie_list/movie_list_repository_impl";
import { MovieListEntity } from "./domain/entity/movie_list_entity";
import { MovieListUsecaseImpl } from "./domain/usecase/movie_list/movie_list_usecase_impl";
import { MovieListFailure } from "./error/movie_list_failure";

const movieListDatasource = new MovieListDatasourceImpl();
const movieRepository = new MovieListRepositoryImpl(movieListDatasource);
const movieListUsecase = new MovieListUsecaseImpl(movieRepository);

export {
    movieListUsecase,
    MovieListEntity,
    MovieListFailure
}