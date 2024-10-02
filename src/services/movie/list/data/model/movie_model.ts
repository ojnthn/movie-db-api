import { MovieInterface } from "../../../../../core/shared/interface/movie/movie_interface";
import { MovieEntity } from "../../../domain/entities/movie_entity";

export class MovieModel {
  constructor(
    public id: number,
    public title: string,
    public genreId: number[],
    public overview: string,   
    public releaseDate: Date,    
    public posterPath: string,
  )  {}

  static fromJson(json: MovieInterface): MovieModel {
    return new MovieModel(
      json.id,
      json.title,
      json.genre_ids,
      json.overview,
      json.release_date,
      json.poster_path,    
    );
  }

  toJson(): MovieInterface {
    return {
      id: this.id,
      title: this.title,
      genre_ids: this.genreId,
      overview: this.overview,
      release_date: this.releaseDate,
      poster_path: this.posterPath,
    };
  }
}