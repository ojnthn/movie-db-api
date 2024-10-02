import express from 'express';
import { MovieListDatasource } from './services/movie/list/data/datasource/movie_list/movie_list_datasource';
import { MovieListDatasourceImpl } from './services/movie/list/data/datasource/movie_list/movie_list_datasource_impl';
import { env } from './core/config/env';
import { MovieRepositoryImpl } from './services/movie/list/data/repository/movie_list/movie_repository_impl';
import { MovieRepository } from './services/movie/list/domain/repository/movie_list/movie_repository';
import { MovieListEntity } from './services/movie/list/domain/entity/movie_list_entity';
import { MovieListFailure } from './services/movie/list/error/movie_list_failure';

const app = express();

const port = env.port;

app.get('/', (req, res) => {
  res.send('Teste')
})

app.get('/movie/list', (req, res) => {
  const movieListDatasource: MovieListDatasource = new MovieListDatasourceImpl();
  const movieRepository: MovieRepository = new MovieRepositoryImpl(movieListDatasource);
  movieRepository.getMovies()
    .then((movieListEntity: MovieListEntity | MovieListFailure) => {
      if (movieListEntity instanceof MovieListEntity) {
        res.send(movieListEntity.toJson());
      } else {
        res.status(500).send(movieListEntity.toString());
      }
    })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});