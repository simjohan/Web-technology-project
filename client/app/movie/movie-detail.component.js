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
var movie_service_1 = require('./movie.service');
var router_1 = require('@angular/router');
/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
var MovieDetailComponent = (function () {
    function MovieDetailComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get URL parameters
        this.sub = this.route.params.subscribe(function (params) { _this.userId = params['id']; });
        console.log(this.sub);
        this.getMovie(this.userId);
    };
    MovieDetailComponent.prototype.getMovie = function (userId) {
        var _this = this;
        console.log(userId);
        this.movieService.getMovie(userId).subscribe(function (data) { return _this.movie = data; }, function (error) { return console.log(error); });
    };
    MovieDetailComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
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
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.ActivatedRoute])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map