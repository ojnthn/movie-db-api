import { MovieModel } from "../../list/data/model/movie_model";

export class MovieListEntity {
    constructor(
      public movies: MovieModel[],
    ) {}
}