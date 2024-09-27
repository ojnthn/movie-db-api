export class MovieEntity {
    constructor(
      public id: number,
      public title: string,
      public genreId: number[],
      public overview: string,   
      public releaseDate: Date,    
      public posterPath: string,
    ) {}
}