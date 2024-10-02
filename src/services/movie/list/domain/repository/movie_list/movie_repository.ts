
import { MovieListFailure } from "../../../error/movie_list_failure";
import { MovieListEntity } from "../../entity/movie_list_entity";


export abstract class MovieRepository {
    abstract getMovies(): Promise<MovieListEntity | MovieListFailure>
}