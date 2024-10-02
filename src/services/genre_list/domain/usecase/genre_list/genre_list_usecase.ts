import { GenreListFailure } from "../../../error/genre_list_failure";
import { GenreListEntity } from "../../entity/genre_list_entity";

export abstract class GenreListUseCase {
  abstract get(): Promise<GenreListEntity | GenreListFailure>;
}