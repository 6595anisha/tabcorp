import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookfrom',
  templateUrl: './bookfrom.component.html',
  styleUrls: ['./bookfrom.component.css']
})
export class BookfromComponent{
  @ViewChild('f') bookform:NgForm;
  book={
    booktitle:'',
    category:'',
    desc:''
  }
  submitted= false;

  // onSubmit(from: NgForm){
  //   console.log(from);
  // }

  onSubmit(form:NgForm){
    console.log(this.bookform);
    this.submitted=true;
    this.book.booktitle=this.bookform.value.booktitle;
    this.book.category=this.bookform.value.category;
    this.book.desc=this.bookform.value.desc;

    this.bookform.reset();
  }


}
