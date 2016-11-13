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
require('rxjs/Rx');
require('rxjs/add/operator/catch');
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        // REST API URLs
        this.newlyReviewMoviesUrl = '/api/newly-reviewed-movies';
        this.specificMovieUrl = '/api/specific-movie/';
        this.searchResultUrl = '/api/get/movies/';
        this.getAllMoviesUrl = '/api/get/movies';
    }
    // Get ALL the movies from API
    MovieService.prototype.getAllMovies = function () {
        return this.http.get(this.getAllMoviesUrl).map(function (res) { return res.json().search_result; });
    };
    // Get get newly reviwed movies from API
    MovieService.prototype.getNewlyReviewedMovies = function () {
        return this.http.get(this.newlyReviewMoviesUrl).map(function (res) { return res.json().movies; });
    };
    // Get a specific movie based on id variable from API
    MovieService.prototype.getMovie = function (id) {
        return this.http.get(this.specificMovieUrl + id).map(function (res) { return res.json().movie; });
    };
    // Get the movies associated with the search term from the API
    MovieService.prototype.getSearchResult = function (searchTerm) {
        return this.http.get(this.searchResultUrl + searchTerm).map(function (res) { return res.json().search_result; });
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map