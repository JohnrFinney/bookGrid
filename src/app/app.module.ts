import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './shared/components/book/book.component';
import { EditBookComponent } from './shared/components/edit-book/edit-book.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
