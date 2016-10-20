import { Component } from '@angular/core';

@Component ({
    //Selector "nav-search" lets other components use the template into their own template.
    selector: "nav-search",
    template:`
    <input type ="text" placeholder="Search..."/>
    <label><input type="checkbox"/>Person search</label>
    
    `
})

export class NavbarSearchComponent {

}