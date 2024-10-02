import { GenreListEntity } from "../../../domain/entity/genre_list_entity";
import { GenreListRepository } from "../../../domain/repository/genre_list/genre_list_repository";
import { GenreListException } from "../../../error/genre_list_exception";
import { GenreListFailure } from "../../../error/genre_list_failure";
import { GenreListDatasource } from "../../datasource/genre_list_datasource";

export class GenreListRepositoryImpl implements GenreListRepository {
  constructor(private datasource: GenreListDatasource) {}

  async getGenres(): Promise<GenreListEntity | GenreListFailure> {
    return await this.datasource.getGenres().catch((error: GenreListException) => {
      return GenreListFailure.fromException(error);
    })
  }
}