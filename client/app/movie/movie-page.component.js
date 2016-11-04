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
var review_service_1 = require('./review.service');
var router_1 = require('@angular/router');
/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
var MoviePageComponent = (function () {
    function MoviePageComponent(reviewService, route) {
        this.reviewService = reviewService;
        this.route = route;
        //Add a reviewTitle to the movie-review that is added in the movie-page.component.html
        this.reviewTitle = "ReviewTitle";
        this.sliderValue = 0;
        this.nameSearched = "";
        this.toggle = false;
        this.format = "";
        this.ratingToggle = false;
        this.nameToggle = false;
        this.reviews = [];
        /*
        Chart
         */
        // Doughnut
        this.doughnutChartLabels = ['1', '2', '3', '4', '5'];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartData = [];
    }
    MoviePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get URL parameters
        this.sub = this.route.params.subscribe(function (params) { _this.movieId = params['id']; });
        this.getReviews(this.movieId);
    };
    MoviePageComponent.prototype.getReviews = function (movieId) {
        var _this = this;
        this.reviewService.getReviews(movieId).subscribe(function (data) { return _this.reviews = data; }, function (error) { return console.log(error); }, function () { return _this.summarizeRatings(_this.reviews); });
    };
    MoviePageComponent.prototype.summarizeRatings = function (reviews) {
        var _this = this;
        this.reviewService.summarizeRatings(reviews).then(function (data) { return _this.doughnutChartData = data; }, function (error) { return console.log(error); });
    };
    MoviePageComponent.prototype.toggleSortByRating = function () {
        this.ratingToggle ? this.format = "rating-asc" : this.format = "rating-desc";
        this.ratingToggle = !this.ratingToggle;
    };
    MoviePageComponent.prototype.toggleSortByName = function () {
        this.nameToggle ? this.format = "name-asc" : this.format = "name-desc";
        this.nameToggle = !this.nameToggle;
    };
    // events
    MoviePageComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    MoviePageComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    MoviePageComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: module.id,
            // Selector "movie" lets other components use the template into their own template
            selector: "movie",
            //TemplateUrl tells the component where it can find the HTML-code it is going to show
            templateUrl: 'movie-page.component.html',
            // stylrUlrs tells the component where it can find the CSS-code that it is going to use
            styleUrls: ['movie-page.component.css'],
            providers: [review_service_1.ReviewService],
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService, router_1.ActivatedRoute])
    ], MoviePageComponent);
    return MoviePageComponent;
}());
exports.MoviePageComponent = MoviePageComponent;
//# sourceMappingURL=movie-page.component.js.map