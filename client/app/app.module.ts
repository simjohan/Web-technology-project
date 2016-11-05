import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule }      from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

/**
 * Imports the components we need to show the application
 */
import { AppComponent }  from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarSearchComponent } from "./navbar/navbar-search.component";
import { FrontPageComponent } from "./home/front-page.component";
import { MovieComponent } from "./movie/movie.component";
import { MovieTitleComponent } from "./movie/movie-title.component";
import { MoviePageComponent }   from "./movie/movie-page.component";0
import { MovieReviewComponent } from './movie/movie-review.component';
import { FacebookComponent } from './navbar/fb.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { MovieDetailComponent } from './movie/movie-detail.component';
import {ProfileUserDetailsComponent} from "./profile/profile-user-details.component";
import {ProfileUserReviews} from "./profile/profile-user-reviews.component";
import {ProfileUserReview} from "./profile/profile-user-review.component";
import { ReviewRatingFilterPipe } from "./movie/pipes/review-rating-filter.pipe";
import { ReviewUserFilterPipe } from "./movie/pipes/review-user-filter.pipe";
import { ReviewSorterPipe } from "./movie/pipes/review-sorter.pipe";
import { MovieSearchPageComponent } from "./movie-search/movie-search-page.component";


/**
 * Imports the AuthGuard that lets us have session-handling in Angular
 */
import { AuthGuard } from "./common/auth.guard";

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
        AppRoutingModule,
        HttpModule,
        ChartsModule
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
        FacebookComponent,
        ProfilePageComponent,
        MovieDetailComponent,
        ProfileUserDetailsComponent,
        ProfileUserReviews,
        ProfileUserReview,
        ReviewRatingFilterPipe,
        ReviewUserFilterPipe,
        ReviewSorterPipe,
        MovieSearchPageComponent
    ],
    //The AuthGuard is a provider
    providers: [
        AuthGuard
    ],
    bootstrap: [ AppComponent ]
})

/**
 * Exporting the class AppModule, so other components have access to it
 */
export class AppModule { }