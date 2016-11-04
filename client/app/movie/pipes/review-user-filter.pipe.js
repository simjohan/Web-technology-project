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
var ReviewUserFilterPipe = (function () {
    function ReviewUserFilterPipe() {
    }
    // Filters reviews based on name
    ReviewUserFilterPipe.prototype.transform = function (value, args) {
        var nameSearched = args;
        var review = value;
        var reviews = []; // Hold the filtered reviews
        if ((nameSearched).length == 0)
            return review; // If no term was entered, return review as is
        for (var i in review) {
            var username = review[i].username;
            if (username.toLowerCase().includes(nameSearched.toLowerCase())) {
                reviews.push(review[i]); // If name meets requirement, push it to the new reviews array
            }
        }
        return reviews; // Return the filtered reviews
    };
    ReviewUserFilterPipe = __decorate([
        core_1.Pipe({
            name: 'ReviewUserFilterPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewUserFilterPipe);
    return ReviewUserFilterPipe;
}());
exports.ReviewUserFilterPipe = ReviewUserFilterPipe;
//# sourceMappingURL=review-user-filter.pipe.js.map