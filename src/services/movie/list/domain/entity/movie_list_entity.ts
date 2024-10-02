import { MovieInterface } from "../../../../../core/shared/interface/movie/movie_interface";
import { MovieEntity } from "./movie_entity";

export class MovieListEntity {
    constructor(
      public movies: MovieEntity[],
    ) {}

    static fromJson(json: MovieInterface[]): MovieListEntity {
      return new MovieListEntity(
        json.map(movie => MovieEntity.fromJson(movie)),
      );
    }

    toJson(): MovieInterface[] {
      return this.movies.map(movie => movie.toJson());
    }
}