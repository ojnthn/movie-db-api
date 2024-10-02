export class GenreListException {
  public name: string = "GenreListException";
  public message: string;
  public stack: string;

  constructor(message: string, stack: string) {
    this.message = message;
    this.stack = stack;
  }

  toString(): string {
    return `${this.name}: ${this.message}\n${this.stack}`;
  }

  static from (error: Error): GenreListException {
    return new GenreListException(error.message, error.stack ?? "Unknown stack");
  }
}