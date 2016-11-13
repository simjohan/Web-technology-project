/// <reference path="../../typings/globals/fbsdk.d.ts" />
import {Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import forEach = require("core-js/fn/array/for-each");
import { DatabaseService } from './../db.service';
import { Router } from '@angular/router';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "movie" lets other components use the template into their own template
    selector: "facebook-component",
    // Providers tell the component which service to use.
    providers: [DatabaseService],
    // Template shows how the page is to be rendered
    template: `
                <div class="facebook-item">
                    <div class="logged-in" *ngIf="isUser">
                        <button class="btn btn-facebook" (click)="facebookLogout()">
                            <div id="btn-image-container"><img  src="https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview.png"/></div>
                            <span>Logout</span>
                        </button>
                        <span><img class="navbar-facebook-img" src="{{imgurl}}"/> {{name}}</span>
                    </div>
                    <div class="not-logged-in" *ngIf="isUser==false">
                        <button class="btn btn-facebook" (click)="facebookLogin()">
                            <div id="btn-image-container"><img  src="https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview.png"/></div>
                            <span> Login </span>
                    </button> 
                    </div>
                </div>   
                
            `,
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['navbar.component.css']
})

export class FacebookComponent implements OnInit, OnDestroy{

    id="";
    name="";
    email="";
    imgurl="";
    isUser=false;

    /**
     * Constructor code from developers.facebook.com
     */
    constructor(
        private _databaseService: DatabaseService, private _ngZone: NgZone, private router: Router ) {
        FB.init({
            appId      : '1623658607931496',
            cookie     : true,  // enable cookies to allow the server to access
            // the session
            xfbml      : true,  // parse ssocial plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }

    /**
     * Handles the login button click
     */
    facebookLogin(){
        var self = this;
        FB.login(function(response) {
            if (response.authResponse) {
                FB.api('/me?fields=name,email,picture', function(me) {
                    self._ngZone.run(() => {
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

            }else{
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'public_profile, email'});
    }

    /**
     * Handles the logout button click
     */
    facebookLogout(){
        let self = this;
        FB.logout(function (response) {
            // User is logged out; update props
            self.isUser = false;
            //let idTest = localStorage.getItem('id');
            //self._databaseService.removeUser(idTest);
            localStorage.clear();
        });
        //When the user logs out, navigate to the home page to not stay on a possible closed page
        this.router.navigate(['/home']);
    }

    // Fire when component is created
    ngOnInit() {
        let _self = this;
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                _self.isUser = true;

                _self.facebookLogin();

            } else if (response.status === 'not_authorized') {
                _self.isUser = false;
            } else {
                _self.isUser = false;
            }
        });
    }

    ngOnDestroy(){
        this.facebookLogout();
    }


}