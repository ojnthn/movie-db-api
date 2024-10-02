export class MovieListException {
    public name: string = "MovieListException";
    public message: string;
    public stack: string;

    constructor(message: string, stack: string) {
        this.message = message;
        this.stack = stack;
    }

    toString(): string {
        return `${this.name}: ${this.message}\n${this.stack}`;
    }

    static from(error: Error): MovieListException {
        return new MovieListException(error.message, error.stack ?? "Unknown stack");
    }
}