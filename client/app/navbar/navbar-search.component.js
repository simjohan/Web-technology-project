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
var NavbarSearchComponent = (function () {
    function NavbarSearchComponent(router) {
        this.router = router;
    }
    ;
    // Search for movies
    NavbarSearchComponent.prototype.searchMovies = function () {
        // Check if str is defined or not and base route choice on the outcome
        if (typeof this.str !== 'undefined') {
            this.str = this.str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, ""); // Clean the string for scary characters
            this.router.navigate(['search/' + this.str]); // Navigate to search route with specific term supplied by user
        }
        else {
            this.router.navigate(['search']);
        }
    };
    NavbarSearchComponent = __decorate([
        core_1.Component({
            //Selector "nav-search" lets other components use the template into their own template.
            selector: "nav-search",
            //Template contains the HTML-code it is going to show
            template: "\n        <input class=\"navbar-search-field\" type=\"text\" #box placeholder=\"Search...\" (keyup.enter)=\"searchMovies()\" [(ngModel)] = \"str\" maxlength=\"25\"/>\n        <input class=\"btn navbar-search-submit-btn\" type=\"submit\" value=\"Submit\" (click)=\"searchMovies()\">\n    ",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavbarSearchComponent);
    return NavbarSearchComponent;
}());
exports.NavbarSearchComponent = NavbarSearchComponent;
//# sourceMappingURL=navbar-search.component.js.map