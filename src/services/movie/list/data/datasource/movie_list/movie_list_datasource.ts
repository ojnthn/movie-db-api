import { MovieListEntity } from "../../../../domain/entities/movie_list_entity";

export abstract class MovieListDatasource {
  abstract getMovies(): Promise<MovieListEntity>;
}