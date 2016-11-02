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
var DatabaseService = (function () {
    //private headers = new Headers({'Content-Type': 'application/json'});
    function DatabaseService(http) {
        this.http = http;
    }
    DatabaseService.prototype.insertUser = function (id, name, email, imgurl) {
        var body = JSON.stringify([id, name, email, imgurl]);
        var headers = new http_1.Headers();
        var addUserUrl = 'http://localhost:3000/api/users/add/' + id;
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(addUserUrl, body, options).subscribe();
        //   .map((res: Response) => res.json())
        //   .catch(this.handleError);
    };
    DatabaseService.prototype.insertMovie = function (id, title, viewCount) {
        var body = JSON.stringify([id, title, viewCount]);
        var headers = new http_1.Headers();
        var addMovieUrl = 'http://localhost:3000/api/movies/add/' + id;
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(addMovieUrl, body, options).subscribe();
    };
    DatabaseService.prototype.removeUser = function (id) {
        var body = JSON.stringify([id]);
        var headers = new http_1.Headers();
        var removeUserUrl = 'http://localhost:3000/api/users/remove/' + id;
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(removeUserUrl, body, options).subscribe();
        //   .map((res: Response) => res.json())
        //   .catch(this.handleError);
    };
    DatabaseService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DatabaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=db.service.js.map