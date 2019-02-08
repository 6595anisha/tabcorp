import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()

export class ServerService{

    constructor(private http: Http){}
    storebooks(books: any[]){
        const headers=new Headers({'Content-Type': 'application/json'})
        return this.http.post('https://gpst5y2nrb.execute-api.ap-southeast-1.amazonaws.com/dev',books, {
            headers:headers
        });
    }
    getbooks(){
        return this.http.get('https://gpst5y2nrb.execute-api.ap-southeast-1.amazonaws.com/dev');
    }
    
    
}