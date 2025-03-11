import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditBookComponent } from './shared/components/edit-book/edit-book.component';
import { Book } from './shared/models/book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'bookGrid';
  public books: Book[] = [];
  public subBooks: Subscription | undefined;
  public dialogRef: MatDialogRef<EditBookComponent, any> | undefined;
  
  constructor(private http: HttpClient,
              public dialog: MatDialog
  ) {}
  ngOnDestroy(): void {
    this.subBooks?.unsubscribe();
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.subBooks = this.http.get<Book[]>('https://ukw-ui-scratchpad-01-caa2dca0crcrhady.ukwest-01.azurewebsites.net/books').subscribe(
      (result) => {
        debugger;
        this.books = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openBook(book: Book | undefined)
  {
    this.dialogRef = this.dialog.open(EditBookComponent, {
      width: '500px',
      data : { book }
    });
    
    this.dialogRef.afterClosed().subscribe(result => {
      this.getBooks();
      console.log('The dialog was closed');
      if (result !== undefined) {
        debugger;
      }
    });
  }

  resetCache()
  {
    this.subBooks = this.http.put('https://ukw-ui-scratchpad-01-caa2dca0crcrhady.ukwest-01.azurewebsites.net/book/reset', null).subscribe(
      (result) => {
        debugger;
        this.getBooks();
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
