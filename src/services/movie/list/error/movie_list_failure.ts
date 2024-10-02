import { MovieListException } from "./movie_list_exception";

export class MovieListFailure {
    constructor(public message: string) {}

    toString(): string {
        return `${this.message}`;
    }

    static fromException(error: MovieListException): MovieListFailure {
        return new MovieListFailure(error.message);
    }
}