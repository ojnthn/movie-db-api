import { GenreInterface } from "../../../../core/shared/interface/genre_list/genre_interface";

export class GenreEntity {
    constructor(
        public id: number,
        public name: string,
    ) {}

    static fromJson(json: GenreInterface): GenreEntity {
        return new GenreEntity(
            json.id,
            json.name,
        )
    }

    toJson(): GenreInterface{
        return{
            id: this.id,
            name: this.name,
        }
    }
}