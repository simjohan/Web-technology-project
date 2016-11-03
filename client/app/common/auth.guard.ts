import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

//import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router) {}

    getLogin(){
        console.log("Inne i getLogin");
        var loggetInn = false;
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log("Logget inn: true");
                loggetInn = true;
                //var uid = response.authResponse.userID;
                //var accessToken = response.authResponse.accessToken;
            } else if (response.status === 'not_authorized') {
                console.log("Logget inn: false1");
                loggetInn = false;
            } else {
                console.log("Logget inn: false2");
                loggetInn = false;
            }
        })

        if (loggetInn){
            console.log("fg.getLogin returnerer true");
            return true;
        }
        else {
            console.log("fg.getLogin returnerer false");
            return false;
        }
    }

    canActivate() {
        console.log("inne i canActivate");
        console.log(this.getLogin());
        if (this.getLogin()){
            console.log("getLogin har returnert true");
          return true;
        }
        else{
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
    }
}
