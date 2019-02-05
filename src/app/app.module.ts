import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
//import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BookfromComponent} from './bookfrom/bookfrom.component';
import {BooklistComponent} from './booklist/booklist.component';

const appRoutes: Routes=[
  {path: '', component: BookfromComponent},
  {path: 'list', component: BooklistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookfromComponent,
    BooklistComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  //  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
