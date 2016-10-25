import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/**
 * Imports the components we need to show the application
 */
import { AppComponent }  from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarSearchComponent } from "./navbar/navbar-search.component";
import { FrontPageComponent } from "./home/front-page.component";
import { MovieComponent } from "./movie/movie.component";
import { MovieTitleComponent } from "./movie/movie-title.component";
import { MoviePageComponent }   from "./movie/movie-page.component";
import { MovieReviewComponent } from './movie/movie-review.component';
import { MovieReviewsComponent } from "./movie/movie-reviews.component";
import { FacebookComponent } from './navbar/fb.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { MovieDetailComponent } from './movie/movie-detail.component';
import {ProfileUserDetailsComponent} from "./profile/profile-user-details.component";
import {ProfileUserReviews} from "./profile/profile-user-reviews.component";
import {ProfileUserReview} from "./profile/profile-user-review.component";

/**
 * @NgModule contains the list of external modules used by the application.
 * Imports: what kind of modules are imported from the angular library
 * Declarations: declare the components used from the rest of the program
 * Bootstrap: this choose how the application is going to be compiled
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        NavbarSearchComponent,
        FrontPageComponent,
        MovieComponent,
        MovieTitleComponent,
        MoviePageComponent,
        MovieReviewComponent,
        MovieReviewsComponent,
        FacebookComponent,
        ProfilePageComponent,
        MovieDetailComponent,
        ProfileUserDetailsComponent,
        ProfileUserReviews,
        ProfileUserReview
    ],
    bootstrap: [ AppComponent ]
})

/**
 * Exporting the class AppModule, so other components have access to it
 */
export class AppModule { }