import { Component } from '@angular/core';

@Component ({
    //Selector "navigation-bar" lets other components use the template into their own template.
    selector: "navigation-bar",
    //"nav-search" is a selector of another component.
    template:`
    <div id="navbar">
        
        
        <nav-search></nav-search>
        
        <a routerLink="/home">Home</a>
        <a routerLink="/movie">Movies</a>
        
        
        <facebook-button></facebook-button>
    </div>
    `
})

export class NavbarComponent {

}