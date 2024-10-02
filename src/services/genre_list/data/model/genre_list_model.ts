import { GenreInterface } from "../../../../core/shared/interface/genre_list/genre_interface";
import { GenreModel } from "./genre_model";

export class GenreListModel {
  constructor(
    public genres: GenreModel[],
  ) {}

  static fromJson(json: GenreInterface[]): GenreListModel {
    return new GenreListModel(
      json.map(genre => GenreModel.fromJson(genre)),
    );
  }

  toJson(): GenreInterface[] {
    return this.genres.map(genre => genre.toJson());
  }
}