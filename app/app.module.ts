import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

/**
 * Imports the components we need to show the application
 */
import { AppComponent }  from './app.component';
import { NavbarComponent } from "./navbar.component";
import { NavbarSearchComponent } from "./navbar-search.component";
import { FrontPageComponent } from "./front-page.component";
import { MovieComponent } from "./movie.component";
import { MovieTitleComponent } from "./movie-title.component";

/**
 * @NgModule contains the list of external modules used by the application.
 * Imports: what kind of modules are imported from the angular library
 * Declarations: declare the components used from the rest of the program
 * Bootstrap: this choose how the application is going to be compiled
 */
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

/**
 * Exporting the class AppModule, so other components have access to it
 */
export class AppModule { }