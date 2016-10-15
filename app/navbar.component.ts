import { Component } from '@angular/core';

@Component ({
    selector: "navigation-bar",
    template:`
    <div id="navbar">
        <nav-search></nav-search>
        <button class="button">Log in</button>
    </div>
    `
})

export class NavbarComponent {

}