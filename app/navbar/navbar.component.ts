import { Component } from '@angular/core';

@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    //Selector "navigation-bar" lets other components use the template into their own template.
    selector: "navigation-bar",
    //"nav-search" is a selector of another component.
    template:`
    <div id="navbar">
        
        
        <nav-search></nav-search>
        
        <!-- Shows links that refers to the routing that are done in app-routing.module.ts -->
        <a routerLink="/home">Home</a>
        <a routerLink="/movie">Movies</a>
        <a routerLink="/profile">Profile</a>
        
        
        <facebook-button></facebook-button>
    </div>
    `,
    /*styleURLs tells the component where it can find the css-file(s) it is supposed to use
      (in addition to the one defined in the index.html-file)
      */
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {

}