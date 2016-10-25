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
var MovieDetailComponent = (function () {
    function MovieDetailComponent() {
        //@Input() lets other components send in the values, which this component inputs here. This value can be used in the template.
        this.movieTitle = "Title";
        this.movieRating = "Rating";
        this.movieYear = "Year";
        this.movieActors = "Actors";
        this.movieDirectors = "Directors";
        this.movieCountry = "Country";
        this.movieDescription = "Description";
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieDetailComponent.prototype, "movieTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieDetailComponent.prototype, "movieRating", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieDetailComponent.prototype, "movieYear", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieDetailComponent.prototype, "movieActors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieDetailComponent.prototype, "movieDirectors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieDetailComponent.prototype, "movieCountry", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovieDetailComponent.prototype, "movieDescription", void 0);
    MovieDetailComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: module.id,
            // Selector "movie-detail" lets other components use the template into their own template
            selector: "movie-detail",
            // stylrUlrs tells the component where it can find the CSS-code that it is going to use
            styleUrls: ['movie-detail.component.css'],
            //TemplateUrl tells the component where it can find the HTML-code it is going to show
            templateUrl: 'movie-detail.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map