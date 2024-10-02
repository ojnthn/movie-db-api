import { GenreListFailure } from "../../../error/genre_list_failure";
import { GenreListEntity } from "../../entity/genre_list_entity";
import { GenreListRepository } from "../../repository/genre_list/genre_list_repository";
import { GenreListUseCase } from "./genre_list_usecase";

export class GenreListUsecaseImpl implements GenreListUseCase {
  constructor(private genreListRepository: GenreListRepository) {}

  async get(): Promise<GenreListEntity | GenreListFailure> {
    return await this.genreListRepository.getGenres();
  }
}