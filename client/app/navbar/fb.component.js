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
var db_service_1 = require('./../db.service');
var FacebookComponent = (function () {
    /**
     * Constructor code from developers.facebook.com
     */
    function FacebookComponent(service) {
        var _this = this;
        this.service = service;
        FB.init({
            appId: '1623658607931496',
            cookie: true,
            // the session
            xfbml: true,
            version: 'v2.5' // use graph api version 2.5
        });
        FB.getLoginStatus(function (response) {
            console.log('IN constructor FB.getLoginStatus');
            _this.statusChangeCallback(response);
        });
    }
    /**
     * Calls the login status from statusChangeCallback
     */
    FacebookComponent.prototype.getLoginStatus = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    /**
     * Handles the login button click
     */
    FacebookComponent.prototype.facebookLogin = function () {
        FB.login(this.statusChangeCallback.bind(this), { scope: 'public_profile, email' });
        console.log("IN FB LOGIN call!");
        var id = localStorage.getItem('id');
        var name = localStorage.getItem('name');
        var email = localStorage.getItem('email');
        var imgurl = localStorage.getItem('imgurl');
        this.fb_name = name;
        this.fb_email = email;
        this.fb_imgurl = imgurl;
        console.log('LOGIN ID: ' + id);
        this.service.insertUser(id, name, email, imgurl);
    };
    /**
     * Handles the logout button click
     */
    FacebookComponent.prototype.facebookLogout = function () {
        console.log("in logout");
        FB.logout(this.statusChangeCallback);
        var idTest = localStorage.getItem('id');
        console.log("logout ID: " + idTest);
        this.service.removeUser(idTest);
        this.fb_name = "";
        this.fb_email = "";
        this.fb_imgurl = "";
        localStorage.clear();
    };
    /**
     * statusChangeCallback is the standard callback function from developers.facebook.com
     * @param response
     */
    FacebookComponent.prototype.statusChangeCallback = function (response) {
        if (response.status === 'connected') {
            console.log('STATUS: ' + response.status);
            // Logged into your app and Facebook.
            FB.api('/me?fields=name,email,picture', function (me) {
                console.log("RESPONSE.ID: " + me.id);
                console.log("RESPONSE.NAME: " + me.name);
                console.log("RESPONSE.EMAIL: " + me.email);
                console.log("RESPONSE.IMAGEURL: " + me.picture.data.url);
                localStorage.setItem('id', me.id);
                localStorage.setItem('name', me.name);
                localStorage.setItem('email', me.email);
                localStorage.setItem('imgurl', me.picture.data.url);
            });
        }
        else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            console.log('STATUS: ' + response.status);
        }
        else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            console.log('STATUS: ' + response.status);
        }
    };
    ;
    FacebookComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('IN ngOnInit()');
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    FacebookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "facebook-component",
            providers: [db_service_1.DatabaseService],
            template: "\n                <div class=\"facebook-item\">\n                    <button class=\"button\" (click)=\"facebookLogin()\">\n                        Sign in with Facebook\n                    </button>\n                    <button class=\"button\" (click)=\"facebookLogout()\">\n                        Logout\n                    </button>\n                    <span><img src=\"{{fb_imgurl}}\"/> {{fb_name}}, {{fb_email}}</span>\n                </div>\n                \n            "
        }), 
        __metadata('design:paramtypes', [db_service_1.DatabaseService])
    ], FacebookComponent);
    return FacebookComponent;
}());
exports.FacebookComponent = FacebookComponent;
//# sourceMappingURL=fb.component.js.map