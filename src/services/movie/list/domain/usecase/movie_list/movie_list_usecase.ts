import { MovieListFailure } from "../../../error/movie_list_failure";
import { MovieListEntity } from "../../entity/movie_list_entity";

export abstract class MovieListUsecase {
  abstract get(): Promise<MovieListEntity | MovieListFailure>;
}