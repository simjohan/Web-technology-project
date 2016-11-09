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
var AuthGuard = (function () {
    /**
     * Need the router to be able to do a redirect to the home page
     * @param router
     */
    function AuthGuard(router) {
        this.router = router;
    }
    /**
     * This function checks the facebook loginstatus, and returns true
     * if the user is logged in, and false otherwise
     * @returns {boolean}
     */
    AuthGuard.prototype.isLoggedIn = function () {
        var loggedIn = false;
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                loggedIn = true;
            }
            else if (response.status === 'not_authorized') {
                loggedIn = false;
            }
            else {
                loggedIn = false;
            }
        });
        if (loggedIn) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Uses the canActivate in the Angular framework, to check if the application is allowed to
     * enter the page from a navigation link
     * @returns {boolean}
     */
    AuthGuard.prototype.canActivate = function () {
        if (this.isLoggedIn()) {
            return true;
        }
        else {
            //If the user is not logged in, navigate to /home
            this.router.navigate(['/home']);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map