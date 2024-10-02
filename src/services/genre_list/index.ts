import { GenreListDatasourceImpl } from "./data/datasource/genre_list_datasource_impl";
import { GenreListRepositoryImpl } from "./data/repository/genre_list/genre_list_repository_impl";
import { GenreListEntity } from "./domain/entity/genre_list_entity";
import { GenreListUsecaseImpl } from "./domain/usecase/genre_list/genre_list_usecase_impl";
import { GenreListFailure } from "./error/genre_list_failure";

const genreListDatasource = new GenreListDatasourceImpl();
const genreListRepository = new GenreListRepositoryImpl(genreListDatasource);
const genreListUsecase = new GenreListUsecaseImpl(genreListRepository);

export {
  genreListUsecase,
  GenreListEntity,
  GenreListFailure
}
