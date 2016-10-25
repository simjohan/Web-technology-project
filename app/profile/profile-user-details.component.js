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
var ProfileUserDetailsComponent = (function () {
    function ProfileUserDetailsComponent() {
        //Send in a user information into the view
        this.userUsername = "Username";
        this.userRealName = "Real Name";
        this.userDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore " +
            "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" +
            "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        //Add a reviewTitle to the movie-review that is added in the movie-page.component.html
        this.reviewTitle = "Good Movie";
    }
    ProfileUserDetailsComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: module.id,
            // Selector "profile-user-details" lets other components use the template into their own template
            selector: "profile-user-details",
            //TemplateUrl tells the component where it can find the HTML-code it is going to show
            templateUrl: 'profile-user-details.component.html',
            // stylrUlrs tells the component where it can find the CSS-code that it is going to use
            styleUrls: ['profile-user-details.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileUserDetailsComponent);
    return ProfileUserDetailsComponent;
}());
exports.ProfileUserDetailsComponent = ProfileUserDetailsComponent;
//# sourceMappingURL=profile-user-details.component.js.map