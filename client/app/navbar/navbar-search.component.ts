import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    //Selector "nav-search" lets other components use the template into their own template.
    selector: "nav-search",
    template:`
    <input #box placeholder="Search..." (keyup.enter)="searchMovies($event)"/>
    `
})

export class NavbarSearchComponent {

    constructor(private router: Router){};

    searchMovies(event:any){
        console.log(event.target.value);
        this.router.navigate(['search/' + event.target.value]);
    }

}