import { MovieListEntity } from "../../../domain/entity/movie_list_entity";

export abstract class MovieListDatasource {
  abstract getMovies(): Promise<MovieListEntity>;
}