import { MovieListModel } from "../../model/movie_list_model";

export abstract class MovieListDatasource {
  abstract getMovies(): Promise<MovieListModel>;
}