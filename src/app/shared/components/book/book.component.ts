import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
})
export class BookComponent {
  public books: Book[] = [];
  public subBooks: Subscription | undefined;
  @Input() bookId: string | undefined
  @Input() title: string | undefined
  @Input() genre: string | undefined
  @Input() summary: string | undefined
  @Output() openBookEvt = new EventEmitter<Book>();
  
  constructor() {}


  public openBook()
  {
    var book: Book = { bookId: this.bookId, title: this.title, genre: this.genre, summary: this.summary }
    this.openBookEvt.emit(book);
  }

}
