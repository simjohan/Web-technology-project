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
var ReviewSorterPipe = (function () {
    function ReviewSorterPipe() {
    }
    ReviewSorterPipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        if (args == "rating-desc") {
            value.sort(function (a, b) {
                if (a.rating < b.rating)
                    return 1;
                if (a.rating > b.rating)
                    return -1;
                return 0;
            });
        }
        else if (args == "rating-asc") {
            value.sort(function (a, b) {
                if (a.rating < b.rating)
                    return -1;
                if (a.rating > b.rating)
                    return 1;
                return 0;
            });
        }
        else if (args == "name-asc") {
            value.sort(function (a, b) {
                if (a.username < b.username)
                    return 1;
                if (a.username > b.username)
                    return -1;
                return 0;
            });
        }
        else if (args == "name-desc") {
            value.sort(function (a, b) {
                if (a.username < b.username)
                    return -1;
                if (a.username > b.username)
                    return 1;
                return 0;
            });
        }
        console.log(value);
        return value;
    };
    ReviewSorterPipe = __decorate([
        core_1.Pipe({
            name: 'ReviewSorterPipe',
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewSorterPipe);
    return ReviewSorterPipe;
}());
exports.ReviewSorterPipe = ReviewSorterPipe;
//# sourceMappingURL=review-sorter.pipe.js.map