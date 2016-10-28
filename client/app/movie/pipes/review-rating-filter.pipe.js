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
// Tell Angular2 we're creating a Pipe with TypeScript decorators
var ReviewRatingFilterPipe = (function () {
    function ReviewRatingFilterPipe() {
    }
    ReviewRatingFilterPipe.prototype.transform = function (value, args) {
        var minRating = args;
        var review = value;
        var reviews = [];
        for (var i in review) {
            var rating = +review[i].rating;
            if (rating >= minRating) {
                reviews.push(review[i]);
            }
        }
        return reviews;
    };
    ReviewRatingFilterPipe = __decorate([
        core_1.Pipe({
            name: 'ReviewRatingFilterPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewRatingFilterPipe);
    return ReviewRatingFilterPipe;
}());
exports.ReviewRatingFilterPipe = ReviewRatingFilterPipe;
//# sourceMappingURL=review-rating-filter.pipe.js.map