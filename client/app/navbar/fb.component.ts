/**
 * Created by Mats on 16.10.2016.
 */
/// <reference path="../../typings/globals/fbsdk.d.ts" />

import { Component, OnInit } from '@angular/core';
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
                    <span><img src="{{fb_imgurl}}"/> {{fb_name}}, {{fb_email}}</span>
                </div>
                
            `
})

export class FacebookComponent implements OnInit{

    status: string;
    fb_id: string;
    fb_name : string;
    fb_email: string;
    fb_imgurl: string;

    /**
     * Constructor code from developers.facebook.com
     */
    constructor(private service: DatabaseService) {
        FB.init({
            appId      : '1623658607931496',
            cookie     : true,  // enable cookies to allow the server to access
            // the session
            xfbml      : true,  // parse ssocial plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });

        FB.getLoginStatus(response => {
            console.log('IN constructor FB.getLoginStatus');
            this.statusChangeCallback(response);
        });


    }

    /**
     * Calls the login status from statusChangeCallback
     */
    getLoginStatus(){
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        })
    }

    /**
     * Handles the login button click
     */
    facebookLogin(){
        FB.login(this.statusChangeCallback.bind(this), {scope: 'public_profile, email'});
        console.log("IN FB LOGIN call!");
        let id = localStorage.getItem('id');
        let name = localStorage.getItem('name');
        let email = localStorage.getItem('email');
        let imgurl = localStorage.getItem('imgurl');

        this.fb_name = name;
        this.fb_email = email;
        this.fb_imgurl = imgurl;

        console.log('LOGIN ID: ' + id);
        this.service.insertUser(id, name, email, imgurl);
    }

    /**
     * Handles the logout button click
     */
    facebookLogout(){
        console.log("in logout");
        FB.logout(this.statusChangeCallback);
        let idTest = localStorage.getItem('id');
        console.log("logout ID: " + idTest);
        this.service.removeUser(idTest);

        this.fb_name = "";
        this.fb_email = "";
        this.fb_imgurl = "";
        localStorage.clear();
    }
    /**
     * statusChangeCallback is the standard callback function from developers.facebook.com
     * @param response
     */
    statusChangeCallback(response) {
        if (response.status === 'connected') {
            console.log('STATUS: ' + response.status);
            // Logged into your app and Facebook.
            FB.api('/me?fields=name,email,picture', function(me) {
                console.log("RESPONSE.ID: " + me.id);
                console.log("RESPONSE.NAME: " + me.name);
                console.log("RESPONSE.EMAIL: " + me.email);
                console.log("RESPONSE.IMAGEURL: " + me.picture.data.url);
                localStorage.setItem('id', me.id);
                localStorage.setItem('name', me.name);
                localStorage.setItem('email',me.email);
                localStorage.setItem('imgurl', me.picture.data.url);

            });
            // The response object is returned with a status field that lets the
            // app know the current login status of the person.
            // Full docs on the response object can be found in the documentation
            // for FB.getLoginStatus().


        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            console.log('STATUS: ' + response.status);


        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            console.log('STATUS: ' + response.status);

        }


    };

    ngOnInit() {
        console.log('IN ngOnInit()');
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }


}