import { GenreInterface } from "../../../../core/shared/interface/genre_list/genre_interface";

export class GenreModel {
  constructor(
    public id: number,
    public name: string,
  ) {}

  static fromJson(json: GenreInterface): GenreModel {
    return new GenreModel(
      json.id,
      json.name,
    );
  }

  toJson(): GenreInterface {
    return {
      id: this.id,
      name: this.name,
    }
  }
}