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
var movie_review_1 = require('./movie-review');
var review_service_1 = require("./review.service");
var router_1 = require("@angular/router");
var ReviewFormComponent = (function () {
    function ReviewFormComponent(reviewService, route, _ngZone) {
        this.reviewService = reviewService;
        this.route = route;
        this._ngZone = _ngZone;
        this.userId = 0;
        this.movieId = 0;
        this.isUser = false;
        this.ratings = [0, 1, 2, 3, 4, 5];
        this.model = new movie_review_1.MovieReview(this.userId, this.movieId, '', '', this.ratings[0]);
        this.submitted = false;
        this.active = true;
    }
    // Submitting the review form. Send data to server
    ReviewFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // _self will now reference the component object.
        var _self = this;
        // Call FB API for user id.
        FB.api('/me', function (response) {
            console.log("USER ID: " + response.id);
            _self.userId = response.id;
            //Callback function for FB API. We now have access to the data.
        }, function (callback) {
            _self.reviewService.sendReview(callback.id, _self.movieId, _self.model.review, _self.model.title, _self.model.rating);
        });
    };
    ReviewFormComponent.prototype.newReview = function () {
        var _this = this;
        this.submitted = false;
        this.model = new movie_review_1.MovieReview(this.userId, this.movieId, '', '', this.ratings[0]);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    ReviewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get URL parameters
        var _self = this;
        this.route.params.subscribe(function (params) { _this.movieId = params['id']; });
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                _self.isUser = true;
            }
            else if (response.status === 'not_authorized') {
                _self.isUser = false;
            }
            else {
                _self.isUser = false;
            }
        });
    };
    ReviewFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'review-form',
            templateUrl: 'review-form.component.html'
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService, router_1.ActivatedRoute, core_1.NgZone])
    ], ReviewFormComponent);
    return ReviewFormComponent;
}());
exports.ReviewFormComponent = ReviewFormComponent;
//# sourceMappingURL=review-form.component.js.map