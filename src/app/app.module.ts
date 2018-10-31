import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { BooksComponent } from './books/books.component';
import {RouterModule} from '@angular/router';
import {BooksResolver} from './books/books.resolver.service';
import {DataService} from './books/data.Service';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([

      {
       path: 'books',
       component: BooksComponent,
       resolve: {books: BooksResolver}
      },
      {
        path: 'books/id',
        component: AppComponent
      }

    ])
  ],
  
  providers: [BooksResolver,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
