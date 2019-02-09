import { Component, OnInit } from '@angular/core';
import {BookfromComponent} from "../bookfrom/bookfrom.component";
import { ServerService } from '../server.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{
  constructor(private serverservice: ServerService){}
  public products: any = [];

ngOnInit(){
  this.serverservice.getbooks()
  .subscribe(
    (response: Response)=> {
      const data= response.json();
      this.products=data;
      console.log(this.products);
    },
    (error) =>console.log(error)
  );
}

}
