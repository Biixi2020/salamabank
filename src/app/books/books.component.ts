import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from './data.Service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],

})
export class BooksComponent implements OnInit {

  isloading = false;
  books = [];

  constructor(private activedRouter: ActivatedRoute,private dataService:DataService){}
  

  ngOnInit() {

    this.books = this.activedRouter.snapshot.data['books'];
  }


  OnValueChange(value:string) {

    console.log(value);

  }

  OnAddData(){

    this.isloading = true;

    this.dataService.PostData().subscribe((data)=>{

      this.isloading = false;
      console.log(data);
    
    });

  }

  

}
