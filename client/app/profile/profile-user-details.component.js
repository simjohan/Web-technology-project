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
var profile_service_1 = require('./profile.service');
/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
var ProfileUserDetailsComponent = (function () {
    function ProfileUserDetailsComponent(profileService, _ngZone) {
        this.profileService = profileService;
        this._ngZone = _ngZone;
    }
    // On start of lifecycle
    ProfileUserDetailsComponent.prototype.ngOnInit = function () {
        var self = this;
        //Use the facebook-api to get the ID from the user that is logged in
        FB.api("/me", function (response) {
            self._ngZone.run(function () {
                self.getUserById(response.id);
            });
        });
    };
    // Use the profileService to get a specific user from the REST API based on id.
    ProfileUserDetailsComponent.prototype.getUserById = function (userNameId) {
        var _this = this;
        this.profileService.getUser(userNameId).subscribe(function (data) { return _this.userById = data; }, function (error) { return console.log(error); });
    };
    ProfileUserDetailsComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: "module.id",
            // Selector "profile-user-details" lets other components use the template into their own template
            selector: "profile-user-details",
            //TemplateUrl tells the component where it can find the HTML-code it is going to show
            templateUrl: 'profile-user-details.component.html',
            // stylrUlrs tells the component where it can find the CSS-code that it is going to use
            styleUrls: ['profile-user-details.component.css'],
            // Provider tells the component which service to use
            providers: [profile_service_1.ProfileService]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService, core_1.NgZone])
    ], ProfileUserDetailsComponent);
    return ProfileUserDetailsComponent;
}());
exports.ProfileUserDetailsComponent = ProfileUserDetailsComponent;
//# sourceMappingURL=profile-user-details.component.js.map