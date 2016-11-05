import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    //Selector "nav-search" lets other components use the template into their own template.
    selector: "nav-search",
    styleUrls: ["navbar-search.component.css"],
    template:`
        <input class="navbar-search-field" type="text" #box placeholder="Search..." (keyup.enter)="searchMovies()" [(ngModel)] = "str" maxlength="25"/>
        <input class="btn navbar-search-submit-btn" type="submit" value="Submit" (click)="searchMovies()">
    `,
})

export class NavbarSearchComponent {

    constructor(private router: Router){};

    private str: string;

    // Search for movies
    searchMovies(){
        // Check if str is defined or not and base route choice on the outcome
        if (typeof this.str !== 'undefined'){
            this.str = this.str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,""); // Clean the string for scary characters
            this.router.navigate(['search/' + this.str]); // Navigate to search route with specific term supplied by user
        }
        else{
            this.router.navigate(['search']);
        }
    }

}