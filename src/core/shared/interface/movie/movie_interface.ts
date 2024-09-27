export interface MovieInterface {
  id: number;
  title: string;
  genre_ids: number[];
  overview: string;
  release_date: Date;
  poster_path: string;
}