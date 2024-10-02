import { RestClientImpl } from "../../../../../../core/utils/rest_client/rest_client.impl";
import { MovieListException } from "../../../error/movie_list_exception";
import { MovieListModel } from "../../model/movie_list_model";
import { MovieListDatasource } from "./movie_list_datasource";

export class MovieListDatasourceImpl implements MovieListDatasource {
  async getMovies(): Promise<MovieListModel> {
    const restClient = new RestClientImpl();

    try{
      const movieJson = await restClient.get('/movie/popular');
      
      return MovieListModel.fromJson(movieJson);
      
    } catch(error) {
      if (error instanceof Error) {
        throw MovieListException.from(error);
      }

      throw MovieListException.from(new Error('Unexpected error'));
    }    
  }
}
