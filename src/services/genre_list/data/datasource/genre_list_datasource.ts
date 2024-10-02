import { GenreListEntity } from "../../domain/entity/genre_list_entity";

export abstract class GenreListDatasource {
    abstract getGenres(): Promise<GenreListEntity>;    
}