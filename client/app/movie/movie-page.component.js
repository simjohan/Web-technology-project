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
var review_service_1 = require('../movie-review/review.service');
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
        this.offset = 0;
        this.reviews = [];
        /*
        Chart
         */
        // Doughnut variables
        this.doughnutChartLabels = ['1', '2', '3', '4', '5'];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartData = [];
    }
    // On init of lifecycle call this function
    MoviePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.movieId = params['id']; }); // get URL parameters
        this.getReviews(this.movieId);
    };
    // Get 2 reviews for a specific movie id
    MoviePageComponent.prototype.getReviews = function (movieId) {
        var _this = this;
        console.log("getReviews");
        // Subscribe and update the reviews array whenever possible
        this.reviewService.getPaginatedReviews(movieId, 2, this.offset).subscribe(function (data) { return _this.reviews = _this.reviews.concat(data); }, function (error) { return console.log(error); }, function () { return _this.summarizeRatings(_this.reviews); } // Execute function whenever reviews array is updated
         // Execute function whenever reviews array is updated
        );
    };
    // The height of the document, this is needed in the function loadReviews
    MoviePageComponent.prototype.getDocumentHeight = function () {
        console.log("GetDocumentHeight");
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    };
    // Loads reviews if a scroll event takes place at the bottom of the page
    MoviePageComponent.prototype.loadReviews = function () {
        console.log("Load reviews");
        if ((window.pageYOffset + 1 || document.documentElement.scrollTop + 1 || document.body.scrollTop + 1) >= this.getDocumentHeight() - window.innerHeight) {
            console.log("Scroll event");
            console.debug("Scroll Event");
            this.offset += 2;
            this.getReviews(this.movieId);
        }
    };
    // Summarizes the ratings to be presented in the doughnut chart
    MoviePageComponent.prototype.summarizeRatings = function (reviews) {
        var _this = this;
        this.reviewService.summarizeRatings(reviews).then(function (data) { return _this.doughnutChartData = data; }, function (error) { return console.log(error); });
    };
    // Set the format based on the toggle boolean
    MoviePageComponent.prototype.toggleSortByRating = function () {
        this.ratingToggle ? this.format = "rating-asc" : this.format = "rating-desc";
        this.ratingToggle = !this.ratingToggle;
    };
    // Set the format based on the toggle boolean
    MoviePageComponent.prototype.toggleSortByName = function () {
        this.nameToggle ? this.format = "name-asc" : this.format = "name-desc";
        this.nameToggle = !this.nameToggle;
    };
    // Currently not in use, kept here to remember the possibility of usage for further development
    MoviePageComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    // Currently not in use, kept here to remember the possibility of usage for further development
    MoviePageComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MoviePageComponent.prototype, "loadReviews", null);
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
            // Providers tell the component which service to use.
            providers: [review_service_1.ReviewService],
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService, router_1.ActivatedRoute])
    ], MoviePageComponent);
    return MoviePageComponent;
}());
exports.MoviePageComponent = MoviePageComponent;
//# sourceMappingURL=movie-page.component.js.map