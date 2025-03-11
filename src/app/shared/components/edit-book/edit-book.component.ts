import { Component, EventEmitter, inject, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from  '@angular/forms';

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent implements  OnDestroy {
  public subBook: Subscription | undefined;
  public book: Book 
  readonly dialogRef = inject(MatDialogRef<EditBookComponent>);
  
  constructor(private http: HttpClient,  @Inject(MAT_DIALOG_DATA) public data: { book: Book}) {
    this.book = data.book;
  }
    ngOnDestroy(): void {
        this.subBook?.unsubscribe();
    }

    saveClose()
    { 
        this.subBook = this.http.put<Book>(`https://ukw-ui-scratchpad-01-caa2dca0crcrhady.ukwest-01.azurewebsites.net/book`, this.book).subscribe(
            (res) => {
              // Close dialog
              this.dialogRef.close();
            },
            (error) => {
              this.dialogRef.close();
              console.error(error);
            }
          );      
    }

}
