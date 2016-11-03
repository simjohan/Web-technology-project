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
/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
var MovieReviewsComponent = (function () {
    function MovieReviewsComponent() {
    }
    MovieReviewsComponent.prototype.ngOnInit = function () {
        this.reviews = [
            { reviewTitle: "TITLE", rating: 5, userName: "USERNAME", ratingText: "lorem" },
            { reviewTitle: "TITLE2", rating: 5, userName: "USERNAME2", ratingText: "lorem" },
            { reviewTitle: "TITLE3", rating: 6, userName: "USERNAME4", ratingText: "lorem" }
        ];
    };
    MovieReviewsComponent.prototype.getDocumentHeight = function () {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    };
    MovieReviewsComponent.prototype.loadReviews = function () {
        if ((document.body.scrollTop + 1) >= this.getDocumentHeight() - window.innerHeight) {
            console.debug("Scroll Event");
            this.reviews.push({ reviewTitle: "TITLE", rating: 5, userName: "USERNAME", ratingText: "lorem" });
        }
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MovieReviewsComponent.prototype, "loadReviews", null);
    MovieReviewsComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: module.id,
            // Selector "movie-reviews" lets other components use the template into their own template
            selector: "movie-reviews",
            // stylrUrls tells the component where it can find the CSS-code that it is going to use
            styleUrls: ['movie-reviews.component.css'],
            //TemplateUrl tells the component where it can find the HTML-code it is going to show
            templateUrl: 'movie-reviews.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], MovieReviewsComponent);
    return MovieReviewsComponent;
}());
exports.MovieReviewsComponent = MovieReviewsComponent;
//# sourceMappingURL=movie-reviews.component.js.map