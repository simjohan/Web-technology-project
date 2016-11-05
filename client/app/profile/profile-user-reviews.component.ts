import { Component } from '@angular/core';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "profile-user-reviews" lets other components use the template into their own template
    selector: "profile-user-reviews",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'profile-user-reviews.component.html',
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['profile-user-reviews.component.css'],
})

/**
 * Exporting the class ProfilePageComponent, so other components have access to it
 */
export class ProfileUserReviews {

}
