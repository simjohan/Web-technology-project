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
//import { tokenNotExpired } from 'angular2-jwt';
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.getLogin = function () {
        console.log("Inne i getLogin");
        var loggetInn = false;
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                console.log("Logget inn: true");
                loggetInn = true;
            }
            else if (response.status === 'not_authorized') {
                console.log("Logget inn: false1");
                loggetInn = false;
            }
            else {
                console.log("Logget inn: false2");
                loggetInn = false;
            }
        });
        if (loggetInn) {
            console.log("fg.getLogin returnerer true");
            return true;
        }
        else {
            console.log("fg.getLogin returnerer false");
            return false;
        }
    };
    AuthGuard.prototype.canActivate = function () {
        console.log("inne i canActivate");
        console.log(this.getLogin());
        if (this.getLogin()) {
            console.log("getLogin har returnert true");
            return true;
        }
        else {
            console.log("Ikke logget inn, navigerer til home");
            this.router.navigate(['/home']);
            return false;
        }
        /*
         if (this.fbCompnent.getLoginStatusTwoTest() === 'connected') {
         return true;
         }

         this.router.navigate(['/home']);
         return false;*/
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map