import { Component, Input } from '@angular/core';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "movie-reviews" lets other components use the template into their own template
    selector: "movie-reviews",
    // stylrUrls tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['movie-reviews.component.css'],
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'movie-reviews.component.html',

})

/**
 * Exporting the class MovieReviewComponent, so other components have access to it.
 */
export class MovieReviewsComponent {
    //@Input() lets other components send in the values, which this component inputs here. This value can be used in the template.

}
