import { MovieListEntity } from "../entities/movie_list_entity";

export abstract class MovieRepository {
    abstract getMovies(): Promise<MovieListEntity | Error>
}