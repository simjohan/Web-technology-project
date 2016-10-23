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
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: module.id,
            //Selector "navigation-bar" lets other components use the template into their own template.
            selector: "navigation-bar",
            //"nav-search" is a selector of another component.
            template: "\n    <div id=\"navbar\">\n        \n        \n        <nav-search></nav-search>\n        \n        <!-- Shows links that refers to the routing that are done in app-routing.module.ts -->\n        <a routerLink=\"/home\">Home</a>\n        <a routerLink=\"/movie\">Movies</a>\n        \n        \n        <facebook-button></facebook-button>\n    </div>\n    ",
            /*styleURLs tells the component where it can find the css-file(s) it is supposed to use
              (in addition to the one defined in the index.html-file)
              */
            styleUrls: ['navbar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map