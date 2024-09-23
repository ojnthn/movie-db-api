import { MovieInterface } from "../../../../../core/shared/interface/movie/movie_interface";

export class MovieModel {
  constructor(
    public id: number,
    public title: string,
    public year: number,
  ) {}

  static fromJson(json: MovieInterface): MovieModel {
    return new MovieModel(
      json.id,
      json.title,
      json.year,
    );
  }

  toJson(): MovieInterface {
    return {
      id: this.id,
      title: this.title,
      year: this.year,
    };
  }
}