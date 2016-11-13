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
var review_service_1 = require("../movie-review/review.service");
/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
var ProfilePageComponent = (function () {
    function ProfilePageComponent(reviewService, _ngZone) {
        this.reviewService = reviewService;
        this._ngZone = _ngZone;
        ///Add a reviewTitle to the movie-review that is added in the movie-page.component.html
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
        // Doughnut variables
        this.doughnutChartLabels = ['1', '2', '3', '4', '5'];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartData = [];
    }
    // On init of lifecycle call this function
    ProfilePageComponent.prototype.ngOnInit = function () {
        var self = this;
        //Use the facebook-api to get the ID from the user that is logged in, and call getUserReviews
        FB.api("/me", function (response) {
            self._ngZone.run(function () {
                self.userId = response.id;
                self.getUserReviews(response.id);
            });
        });
    };
    // Get all reviews for a specific movie id
    ProfilePageComponent.prototype.getUserReviews = function (userId) {
        var _this = this;
        // Subscribe and update the reviews array whenever possible
        this.reviewService.getUserReviews(userId).subscribe(function (data) { return _this.reviews = data; }, function (error) { return console.log(error); }, function () { return _this.summarizeRatings(_this.reviews); } // Execute function whenever reviews array is updated
         // Execute function whenever reviews array is updated
        );
    };
    //Used in loadReviews
    ProfilePageComponent.prototype.getDocumentHeight = function () {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    };
    ProfilePageComponent.prototype.loadReviews = function () {
        if ((document.body.scrollTop + 1) >= this.getDocumentHeight() - window.innerHeight) {
            console.debug("Scroll Event");
            this.getUserReviews(this.userId);
        }
    };
    // Summarizes the ratings to be presented in the doughnut chart
    ProfilePageComponent.prototype.summarizeRatings = function (reviews) {
        var _this = this;
        this.reviewService.summarizeRatings(reviews).then(function (data) { return _this.doughnutChartData = data; }, function (error) { return console.log(error); });
    };
    // Set the format based on the toggle boolean
    ProfilePageComponent.prototype.toggleSortByRating = function () {
        this.ratingToggle ? this.format = "rating-asc" : this.format = "rating-desc";
        this.ratingToggle = !this.ratingToggle;
    };
    // Set the format based on the toggle boolean
    ProfilePageComponent.prototype.toggleSortByName = function () {
        this.nameToggle ? this.format = "name-asc" : this.format = "name-desc";
        this.nameToggle = !this.nameToggle;
    };
    // Currently not in use, kept here to remember the possibility of usage for further development
    ProfilePageComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    // Currently not in use, kept here to remember the possibility of usage for further development
    ProfilePageComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ProfilePageComponent.prototype, "loadReviews", null);
    ProfilePageComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: "module.id",
            // Selector "profile" lets other components use the template into their own template
            selector: "profile",
            //TemplateUrl tells the component where it can find the HTML-code it is going to show
            templateUrl: 'profile-page.component.html',
            // stylrUlrs tells the component where it can find the CSS-code that it is going to use
            styleUrls: ['profile-page.component.css'],
            // Providers tell the component which service to use.
            providers: [review_service_1.ReviewService]
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService, core_1.NgZone])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());
exports.ProfilePageComponent = ProfilePageComponent;
//# sourceMappingURL=profile-page.component.js.map