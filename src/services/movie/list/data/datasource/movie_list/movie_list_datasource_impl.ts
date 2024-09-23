import { MovieListModel } from "../../model/movie_list_model";
import { MovieListDatasource } from "./movie_list_datasource";

export class MovieListDatasourceImpl implements MovieListDatasource {
  async getMovies(): Promise<MovieListModel> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MovieListModel.fromJson([
          { id: 1, title: 'The Shawshank Redemption', year: 1994 },
          { id: 2, title: 'The Godfather', year: 1972 },
          { id: 3, title: 'The Godfather: Part II', year: 1974 },
          { id: 4, title: 'The Dark Knight', year: 2008 },
          { id: 5, title: '12 Angry Men', year: 1957 },
          { id: 6, title: "Schindler's List", year: 1993 },
          { id: 7, title: 'Pulp Fiction', year: 1994 },
          { id: 8, title: 'The Lord of the Rings: The Return of the King', year: 2003 },
          { id: 9, title: 'The Good, the Bad and the Ugly', year: 1966 },
          { id: 10, title: 'Fight Club', year: 1999 },
        ]));
      }, 1000);
    });
  }
}