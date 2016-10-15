import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent } from "./navbar.component";
import { NavbarSearchComponent } from "./navbar-search.component";
import { FrontPageComponent } from "./front-page.component";
import { MovieComponent } from "./movie.component";
import { MovieTitleComponent } from "./movie-title.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        NavbarSearchComponent,
        FrontPageComponent,
        MovieComponent,
        MovieTitleComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }