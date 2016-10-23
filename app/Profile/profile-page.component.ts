import { Component, OnInit } from '@angular/core';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "profile" lets other components use the template into their own template
    selector: "profile",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'profile-page.component.html',
})

/**
 * Exporting the class ProfilePageComponent, so other components have access to it
 */
export class ProfilePageComponent {
    userName = "John Snow";

}
