import { Component } from '@angular/core';

@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    //Selector "navigation-bar" lets other components use the template into their own template.
    selector: "navigation-bar",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: "navbar.component.html",
    /*styleURLs tells the component where it can find the css-file(s) it is supposed to use
      (in addition to the one defined in the index.html-file)
      */
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {

}