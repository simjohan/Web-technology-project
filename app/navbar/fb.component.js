/**
 * Created by Mats on 16.10.2016.
 */
/// <reference path="../../typings/globals/fbsdk.d.ts" />
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
var FacebookComponent = (function () {
    /**
     * Constructor code from developers.facebook.com
     */
    function FacebookComponent() {
        var _this = this;
        this.fb_id = "n/a";
        this.fb_name = "HEIDU";
        this.fb_email = "n/a";
        this.fb_imgUrl = "n/a";
        FB.init({
            appId: '1623658607931496',
            cookie: false,
            // the session
            xfbml: true,
            version: 'v2.5' // use graph api version 2.5
        });
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    }
    /**
     * Calls the login status from statusChangeCallback
     */
    FacebookComponent.prototype.getLoginStatus = function () {
        var _this = this;
        FB.getLoginStatus(function (respone) {
            _this.statusChangeCallback(respone);
        });
    };
    /**
     * Handles the login button click
     */
    FacebookComponent.prototype.facebookLogin = function () {
        FB.login(this.statusChangeCallback, { scope: 'public_profile, email' });
    };
    /**
     * Handles the logout button click
     */
    FacebookComponent.prototype.facebookLogout = function () {
        console.log("in logout");
        FB.logout(this.statusChangeCallback);
    };
    /**
     * statusChangeCallback is the standard callback function from developers.facebook.com
     * @param response
     */
    FacebookComponent.prototype.statusChangeCallback = function (response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            console.log('STATUS?: ' + response.status);
            FB.api('/me?fields=name,email,picture', function (me) {
                console.log("RESPONSE.NAME: " + me.name);
                console.log("RESPONSE.EMAIL: " + me.email);
                console.log("RESPONSE.IMAGEURL: " + me.picture.data.url);
            });
            console.log("fb_name: " + this.fb_name);
        }
        else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            console.log('STATUS?: ' + response.status);
        }
        else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            console.log('STATUS?: ' + response.status);
        }
    };
    ;
    FacebookComponent.prototype.ngOnInit = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    FacebookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "facebook-button",
            template: "\n                <div>\n                    <button class=\"button\" (click)=\"facebookLogin()\">\n                        Sign in with Facebook\n                    </button>\n                    <button class=\"button\" (click)=\"facebookLogout()\">\n                        Logout\n                    </button>\n                    \n                </div>\n                \n            "
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookComponent);
    return FacebookComponent;
}());
exports.FacebookComponent = FacebookComponent;
//# sourceMappingURL=fb.component.js.map