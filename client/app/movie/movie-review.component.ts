import { Component, Input } from '@angular/core';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "movie-review" lets other components use the template into their own template
    selector: "movie-review",
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['movie-review.component.css'],
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'movie-review.component.html',

})

/**
 * Exporting the class MovieReviewComponent, so other components have access to it.
 */
export class MovieReviewComponent {
    //@Input() lets other components send in the values, which this component inputs here. This value can be used in the template.
    @Input() reviewTitle = "TITLE";
    @Input() rating = "RATING";
    @Input() userName = "USERNAME";
    @Input() ratingText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure" +
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non" +
        "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    showElement = false;
    toggle(){
        if (this.showElement) this.showElement = false;
        else if (!this.showElement) this.showElement = true;
    }

}
