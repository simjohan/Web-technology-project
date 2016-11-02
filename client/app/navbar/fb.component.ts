/**
 * Created by Mats on 16.10.2016.
 */
/// <reference path="../../typings/globals/fbsdk.d.ts" />

import { Component, OnInit, NgZone } from '@angular/core';
import forEach = require("core-js/fn/array/for-each");
import { DatabaseService } from './../db.service';

@Component ({
    moduleId: module.id,
    selector: "facebook-component",
    providers: [DatabaseService],
    template: `
                <div class="facebook-item">
                    <button class="button" (click)="facebookLogin()">
                        Sign in with Facebook
                    </button>
                    <button class="button" (click)="facebookLogout()">
                        Logout
                    </button>
                    <span *ngIf="isUser"><img src="{{imgurl}}"/> {{name}}, {{email}}</span>
                </div>
                
            `
})

export class FacebookComponent implements OnInit{

    id="";
    name="";
    email="";
    imgurl="";
    isUser=false;

    /**
     * Constructor code from developers.facebook.com
     */
    constructor(
        private _databaseService: DatabaseService, private _ngZone: NgZone ) {
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

                        self._databaseService.insertUser(self.id, self.name, self.email, self.imgurl);

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
            let idTest = localStorage.getItem('id');
            self._databaseService.removeUser(idTest);
            localStorage.clear();
        });

    }

    ngOnInit() {
        console.log('Init done');
    }

    ngOnDestroy(){
        this.facebookLogout();
    }


}