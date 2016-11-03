"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./app-routing.module');
var http_1 = require('@angular/http');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
/**
 * Imports the components we need to show the application
 */
var app_component_1 = require('./app.component');
var navbar_component_1 = require("./navbar/navbar.component");
var navbar_search_component_1 = require("./navbar/navbar-search.component");
var front_page_component_1 = require("./home/front-page.component");
var movie_component_1 = require("./movie/movie.component");
var movie_title_component_1 = require("./movie/movie-title.component");
var movie_page_component_1 = require("./movie/movie-page.component");
0;
var movie_review_component_1 = require('./movie/movie-review.component');
var fb_component_1 = require('./navbar/fb.component');
var profile_page_component_1 = require('./profile/profile-page.component');
var movie_detail_component_1 = require('./movie/movie-detail.component');
var profile_user_details_component_1 = require("./profile/profile-user-details.component");
var profile_user_reviews_component_1 = require("./profile/profile-user-reviews.component");
var profile_user_review_component_1 = require("./profile/profile-user-review.component");
var review_rating_filter_pipe_1 = require("./movie/pipes/review-rating-filter.pipe");
var review_user_filter_pipe_1 = require("./movie/pipes/review-user-filter.pipe");
var review_sorter_pipe_1 = require("./movie/pipes/review-sorter.pipe");
var movie_search_page_component_1 = require("./movie-search/movie-search-page.component");
var movie_reviews_component_1 = require("./movie/movie-reviews.component");
/**
 * @NgModule contains the list of external modules used by the application.
 * Imports: what kind of modules are imported from the angular library
 * Declarations: declare the components used from the rest of the program
 * Bootstrap: this choose how the application is going to be compiled
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                navbar_search_component_1.NavbarSearchComponent,
                front_page_component_1.FrontPageComponent,
                movie_component_1.MovieComponent,
                movie_title_component_1.MovieTitleComponent,
                movie_page_component_1.MoviePageComponent,
                movie_review_component_1.MovieReviewComponent,
                fb_component_1.FacebookComponent,
                profile_page_component_1.ProfilePageComponent,
                movie_detail_component_1.MovieDetailComponent,
                profile_user_details_component_1.ProfileUserDetailsComponent,
                profile_user_reviews_component_1.ProfileUserReviews,
                profile_user_review_component_1.ProfileUserReview,
                review_rating_filter_pipe_1.ReviewRatingFilterPipe,
                review_user_filter_pipe_1.ReviewUserFilterPipe,
                review_sorter_pipe_1.ReviewSorterPipe,
                movie_search_page_component_1.MovieSearchPageComponent,
                movie_reviews_component_1.MovieReviewsComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map