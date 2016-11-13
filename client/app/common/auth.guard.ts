import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    /**
     * Need the router to be able to do a redirect to the home page
     * @param router
     */
    constructor(
        private router: Router) {}

    /**
     * This function checks the facebook loginstatus, and returns true
     * if the user is logged in, and false otherwise
     * @returns {boolean}
     */
    isLoggedIn(){
        var loggedIn = false;
        FB.getLoginStatus(function(response: any) {
            if (response.status === 'connected') {
                loggedIn = true;
            } else if (response.status === 'not_authorized') {
                loggedIn = false;
            } else {
                loggedIn = false;
            }
        });

        if (loggedIn){
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Uses the canActivate in the Angular framework, to check if the application is allowed to
     * enter the page from a navigation link
     * @returns {boolean}
     */
    canActivate() {
        if (this.isLoggedIn()){
            return true;
        }
        else{
            //If the user is not logged in, navigate to /home
            this.router.navigate(['/home']);
            return false;
        }
    }
}
