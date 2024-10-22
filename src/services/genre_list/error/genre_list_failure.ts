import { GenreListException } from "./genre_list_exception";

export class GenreListFailure {
  constructor(public message: string) {}

  toString(): string{
    return `${this.message}`;
  }

  static fromException(error: GenreListException): GenreListFailure {
    return new GenreListFailure(error.message);
  }
}