import dotenv from "dotenv";

dotenv.config();

export const env = {
    theMovieDbApiKey: process.env.THE_MOVIE_DB_API_KEY,
    port: process.env.PORT,
}