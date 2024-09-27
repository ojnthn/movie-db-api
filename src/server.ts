import express from 'express';
import { MovieListDatasource } from './services/movie/list/data/datasource/movie_list/movie_list_datasource';
import { MovieListDatasourceImpl } from './services/movie/list/data/datasource/movie_list/movie_list_datasource_impl';
import { env } from './core/config/env';

const app = express();

const port = env.port;

app.get('/movie/list', (req, res) => {
  const movieListDatasource: MovieListDatasource = new MovieListDatasourceImpl();

  movieListDatasource.getMovies()
    .then(movieListModel => res.json(movieListModel.toJson()))
    .catch(error => {
      console.error(error);

      res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});