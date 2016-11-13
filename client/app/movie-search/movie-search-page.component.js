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
var router_1 = require('@angular/router');
var movie_service_1 = require('./../movie/movie.service');
/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
var MovieSearchPageComponent = (function () {
    function MovieSearchPageComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
    }
    // Fire when component is created
    MovieSearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Find the parameter of the route and assign it to the searchTerm variable
        this.route.params.subscribe(function (params) {
            _this.searchTerm = params['query'];
            // If a term is supplied, find movies matching to the term
            if (typeof _this.searchTerm !== 'undefined') {
                _this.getSearchResult(_this.searchTerm);
            }
            else {
                _this.getAllMovies();
            }
        });
    };
    // Gets all movies
    MovieSearchPageComponent.prototype.getAllMovies = function () {
        var _this = this;
        this.movieService.getAllMovies().subscribe(function (data) { return _this.searchResult = data; }, // Set searchResult when data is updated
        function (// Set searchResult when data is updated
            error) { return console.log(error); });
    };
    // Get movie based on search term
    MovieSearchPageComponent.prototype.getSearchResult = function (searchTerm) {
        var _this = this;
        this.movieService.getSearchResult(searchTerm).subscribe(function (data) { return _this.searchResult = data; }, // Set searchResult when data is updated
        function (// Set searchResult when data is updated
            error) { return console.log(error); });
    };
    MovieSearchPageComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: "module.id",
            // Selector "movie" lets other components use the template into their own template
            selector: "movie-search-page",
            //TemplateUrl tells the component where it can find the HTML-code it is going to show
            templateUrl: 'movie-search-page.component.html',
            // Providers tell the component which service to use.
            providers: [movie_service_1.MovieService],
            // stylrUlrs tells the component where it can find the CSS-code that it is going to use
            styleUrls: ['movie-search-page.component.css'],
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.ActivatedRoute])
    ], MovieSearchPageComponent);
    return MovieSearchPageComponent;
}());
exports.MovieSearchPageComponent = MovieSearchPageComponent;
//# sourceMappingURL=movie-search-page.component.js.map