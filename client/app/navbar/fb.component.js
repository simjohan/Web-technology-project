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
/// <reference path="../../typings/globals/fbsdk.d.ts" />
var core_1 = require('@angular/core');
var db_service_1 = require('./../db.service');
var router_1 = require('@angular/router');
/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
var FacebookComponent = (function () {
    /**
     * Constructor code from developers.facebook.com
     */
    function FacebookComponent(_databaseService, _ngZone, router) {
        this._databaseService = _databaseService;
        this._ngZone = _ngZone;
        this.router = router;
        this.id = "";
        this.name = "";
        this.email = "";
        this.imgurl = "";
        this.isUser = false;
        FB.init({
            appId: '1623658607931496',
            cookie: true,
            // the session
            xfbml: true,
            version: 'v2.5' // use graph api version 2.5
        });
    }
    /**
     * Handles the login button click
     */
    FacebookComponent.prototype.facebookLogin = function () {
        var self = this;
        FB.login(function (response) {
            if (response.authResponse) {
                FB.api('/me?fields=name,email,picture', function (me) {
                    self._ngZone.run(function () {
                        self.id = me.id;
                        self.name = me.name;
                        self.email = me.email;
                        self.imgurl = me.picture.data.url;
                        self.isUser = true;
                        localStorage.setItem('id', me.id);
                        localStorage.setItem('name', me.name);
                        localStorage.setItem('email', me.email);
                        localStorage.setItem('imgurl', me.picture.data.url);
                        console.log("ID: " + self.id);
                        console.log("NAME: " + self.name);
                        console.log("EMAIL: " + self.email);
                        console.log("IMGURL: " + self.imgurl);
                        //Add the user to the database, and navigate to the profile page
                        self._databaseService.insertUser(self.id, self.name, self.email, self.imgurl);
                        self.router.navigate(['/profile']);
                    });
                });
            }
            else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'public_profile, email' });
    };
    /**
     * Handles the logout button click
     */
    FacebookComponent.prototype.facebookLogout = function () {
        var self = this;
        FB.logout(function (response) {
            // User is logged out; update props
            self.isUser = false;
            //let idTest = localStorage.getItem('id');
            //self._databaseService.removeUser(idTest);
            localStorage.clear();
        });
        //When the user logs out, navigate to the home page to not stay on a possible closed page
        this.router.navigate(['/home']);
    };
    // Fire when component is created
    FacebookComponent.prototype.ngOnInit = function () {
        var _self = this;
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                _self.isUser = true;
                _self.facebookLogin();
            }
            else if (response.status === 'not_authorized') {
                _self.isUser = false;
            }
            else {
                _self.isUser = false;
            }
        });
    };
    FacebookComponent.prototype.ngOnDestroy = function () {
        this.facebookLogout();
    };
    FacebookComponent = __decorate([
        core_1.Component({
            //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
            moduleId: module.id,
            // Selector "movie" lets other components use the template into their own template
            selector: "facebook-component",
            // Providers tell the component which service to use.
            providers: [db_service_1.DatabaseService],
            //TemplateUrl tells the component where it can find the HTML-code it is going to show
            templateUrl: "fb.component.html",
            // stylrUlrs tells the component where it can find the CSS-code that it is going to use
            styleUrls: ['navbar.component.css']
        }), 
        __metadata('design:paramtypes', [db_service_1.DatabaseService, core_1.NgZone, router_1.Router])
    ], FacebookComponent);
    return FacebookComponent;
}());
exports.FacebookComponent = FacebookComponent;
//# sourceMappingURL=fb.component.js.map