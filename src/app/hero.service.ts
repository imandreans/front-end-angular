import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}
  public server: string = 'http://localhost:500/api/';

  public getBooks() {
    return this.httpClient.get<Book>(this.server + 'book');
  }
  public getBook(bookId: String) {
    return this.httpClient.get<Book>(this.server + 'book/${bookId}');
  }
  public addBook(bookObj: Book, image: any) {
    console.log(bookObj);
  }
}
