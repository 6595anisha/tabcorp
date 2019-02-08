import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-bookfrom',
  templateUrl: './bookfrom.component.html',
  styleUrls: ['./bookfrom.component.css']
})
export class BookfromComponent{
  @ViewChild('f') bookform:NgForm;
  book={
    title:'',
    category:'',
    desc:''
  }
  submitted= false;
  booksarray: Array<Object>=[];

  constructor(private serverservice: ServerService){}


  onSubmit(form:NgForm){
    
    this.submitted=true;
    this.book.title=this.bookform.value.title;
    this.book.category=this.bookform.value.category;
    this.book.desc=this.bookform.value.desc;
    console.log(this.bookform);
    this.booksarray.push(this.bookform.value);
    console.log(this.booksarray);
    this.serverservice.storebooks(this.booksarray)
    .subscribe(
      (response)=> console.log(response),
      (error) =>console.log(error)
    );
    //this.bookform.reset();
  }
  onSave(){
    this.serverservice.storebooks(this.booksarray)
    .subscribe(
      (response)=> console.log(response),
      (error) =>console.log(error)
    );

  }

}
