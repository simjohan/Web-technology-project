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
var http_1 = require('@angular/http');
var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
        this.reviewsUrl = '/api/specific-movie-reviews/'; // URL to web API
        this.userReviewsUrl = '/api/reviews/specific-user-reviews/'; // URL to web API
    }
    // get the reviews from the API url, use id to find reviews for specific movie
    ReviewService.prototype.getReviews = function (id) {
        return this.http.get(this.reviewsUrl + id).map(function (res) { return res.json().reviews; });
    };
    // get the user reviews from the API url
    ReviewService.prototype.getUserReviews = function (id) {
        return this.http.get(this.userReviewsUrl + id).map(function (res) { return res.json().reviews; });
    };
    // Count the ratings and summarize them into an array
    // The array contains the number of each rating at their specific index
    // If theres 2 ratings of 0, the value of reviewsRatings[0] will be 2
    ReviewService.prototype.summarizeRatings = function (reviews) {
        var reviewRatings = [0, 0, 0, 0, 0];
        for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
            var review = reviews_1[_i];
            var ratingToInt = +review.rating - 1; // Convert to int
            reviewRatings[ratingToInt] = reviewRatings[ratingToInt] + 1;
            console.log(ratingToInt);
        }
        return Promise.resolve(reviewRatings);
    };
    ReviewService.prototype.sendReview = function (userId, movieId, title, rating, review) {
        var body = JSON.stringify([userId, movieId, title, rating, review]);
        var headers = new http_1.Headers();
        var id = userId + movieId;
        var addReviewUrl = 'http://localhost:3000/api/reviews/add/' + id;
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(addReviewUrl, body, options).subscribe();
    };
    ReviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map