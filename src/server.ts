import express from 'express';
import { env } from './core/config/env';
import { movieListUsecase, MovieListEntity, MovieListFailure } from './services/movie/list';

const app = express();

app.listen(env.port, () => {
  console.log(`Server is running on http://localhost:${env.port}`);
});

app.get('/movie/list', (req, res) => {
  movieListUsecase.get()
    .then((movieListEntity: MovieListEntity | MovieListFailure) => {
      if (movieListEntity instanceof MovieListEntity) {
        res.send(movieListEntity.toJson());
      } else {
        res.status(500).send(movieListEntity.toString());
      }
    })
});