import express from 'express';
import { env } from './core/config/env';
import { movieListUsecase, MovieListEntity, MovieListFailure } from './services/movie/list';
import { genreListUsecase, GenreListEntity, GenreListFailure } from './services/genre_list';

const app = express();

app.listen(env.port, () => {
  console.log(`Server is running on http://localhost:${env.port}`);
});

app.get('/movie/list', (req, res) => {
  movieListUsecase.get()
    .then((response: MovieListEntity | MovieListFailure) => {
      if (response instanceof MovieListFailure) {
        res.status(500).send(response.toString());
        return;
      }

      res.send(response.toJson());
    })
});

app.get('/genre/list', (req, res) => {
  genreListUsecase.get()
    .then((response: GenreListEntity | GenreListFailure) => {
      if (response instanceof GenreListFailure) {
        res.status(500).send(response.toString());
        return;
      }

      res.send(response.toJson());
    })
})