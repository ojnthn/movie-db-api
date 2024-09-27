import { RestClientImpl } from "../../../../../../core/utils/rest_client/rest_client.impl";
import { MovieListEntity } from "../../../../domain/entities/movie_list_entity";
import { MovieListDatasource } from "./movie_list_datasource";

export class MovieListDatasourceImpl implements MovieListDatasource {
  async getMovies(): Promise<MovieListEntity> {
    const restClient = new RestClientImpl();

    try{
      const movieJson = await restClient.get('/movie/popular');
      
      return MovieListEntity.fromJson(movieJson);
      
    } catch(error) {
      throw error;
    }    
  }
}
