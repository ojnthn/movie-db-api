import { MovieInterface } from "../../../../../core/shared/interface/movie/movie_interface";
import { MovieModel } from "./movie_model";

export class MovieListModel {
  constructor(
    public movies: MovieModel[],
  ) {}

  static fromJson(json: MovieInterface[]): MovieListModel {
    return new MovieListModel(
      json.map(movie => MovieModel.fromJson(movie)),
    );
  }

  toJson(): MovieInterface[] {
    return this.movies.map(movie => movie.toJson());
  }
}