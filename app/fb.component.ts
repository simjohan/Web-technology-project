/**
 * Created by Mats on 16.10.2016.
 */
/// <reference path="../typings/globals/fbsdk.d.ts" />

import { Component, OnInit } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: "facebook-button",
    template: `
                <div>
                    <button class="button" (click)="facebookLogin()">
                        Sign in with Facebook
                    </button>
                    <button class="button" (click)="facebookLogout()">
                        Logout
                    </button>
                    
                </div>
                
            `
})

export class FacebookComponent implements OnInit{

    private fb_id: string = "n/a";
    private fb_name: string = "HEIDU";
    private fb_email: string = "n/a";
    private fb_imgUrl: string = "n/a";


    /**
     * Constructor code from developers.facebook.com
     */
    constructor() {
        FB.init({
            appId      : '1623658607931496',
            cookie     : false,  // enable cookies to allow the server to access
            // the session
            xfbml      : true,  // parse ssocial plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });

        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });


    }

    /**
     * Calls the login status from statusChangeCallback
     */
    getLoginStatus(){
        FB.getLoginStatus(respone => {
            this.statusChangeCallback(respone);
        })
    }

    /**
     * Handles the login button click
     */
    facebookLogin(){
        FB.login(this.statusChangeCallback, {scope: 'public_profile, email'});
    }

    /**
     * Handles the logout button click
     */
    facebookLogout(){
        console.log("in logout");
        FB.logout(this.statusChangeCallback);
    }
    /**
     * statusChangeCallback is the standard callback function from developers.facebook.com
     * @param response
     */
    statusChangeCallback(response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            console.log('STATUS?: ' + response.status);
            FB.api('/me?fields=name,email,picture', function(me) {
                console.log("RESPONSE.NAME: " + me.name);
                console.log("RESPONSE.EMAIL: " + me.email);
                console.log("RESPONSE.IMAGEURL: " + me.picture.data.url);
            });
            console.log("fb_name: " + this.fb_name);
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            console.log('STATUS?: ' + response.status)

        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            console.log('STATUS?: ' + response.status)

        }


    };

    ngOnInit() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }


}