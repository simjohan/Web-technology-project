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
var ReviewFormComponent = (function () {
    function ReviewFormComponent(reviewService) {
        this.reviewService = reviewService;
        this.ratings = [0, 1, 2, 3, 4, 5];
        this.model = new movie_review_1.MovieReview('', this.ratings[0], '');
        this.submitted = false;
        this.active = true;
    }
    ReviewFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(JSON.stringify(this.model));
    };
    Object.defineProperty(ReviewFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ReviewFormComponent.prototype.newReview = function () {
        var _this = this;
        this.model = new movie_review_1.MovieReview('', this.ratings[0], '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    ReviewFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'review-form',
            templateUrl: 'review-form.component.html'
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService])
    ], ReviewFormComponent);
    return ReviewFormComponent;
}());
exports.ReviewFormComponent = ReviewFormComponent;
//# sourceMappingURL=review-form.component.js.map