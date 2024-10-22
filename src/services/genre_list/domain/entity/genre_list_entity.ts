import { GenreInterface } from "../../../../core/shared/interface/genre_list/genre_interface";
import { GenreEntity } from "./genre_entity";

export class GenreListEntity {
    constructor(
        public genres: GenreEntity[],
    ) {}

    static fromJson(json: GenreInterface[]): GenreListEntity {
        return new GenreListEntity(
            json.map(genre => GenreEntity.fromJson(genre)),
        );    
    }

    toJson(): GenreInterface[] {
        return this.genres.map(genre => genre.toJson());
    }
}