import { MovieListModel } from "../../list/data/model/movie_list_model";

export abstract class MovieRepository {
    abstract getMovies(): Promise<MovieListModel | Error>
}