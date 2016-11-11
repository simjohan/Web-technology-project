import { Component, Input, OnChanges } from '@angular/core';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: "module.id",
    // Selector "movie-review" lets other components use the template into their own template
    selector: "movie-review",
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['reviews.component.css'],
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'movie-review.component.html',

})

/**
 * Exporting the class MovieReviewComponent, so other components have access to it.
 */
export class MovieReviewComponent implements OnChanges  {
    //@Input() lets other components send in the values, which this component inputs here. This value can be used in the template.
    @Input() review: any;
    @Input() reviewTitle: string;
    @Input() rating: number;
    @Input() userName: string;
    @Input() ratingText: string;

    private stars: String = "";
    private showElement: boolean = false;

    // Listen to changes
    ngOnChanges(){
        // Change the rating from number to stars
        this.stars = "";
        for (var i = 0; this.review.rating > i; i++){
            this.stars = this.stars + "☆";
        }
    }

    // Toggles the hide/show effect of the expand button
    toggle(){
        if (this.showElement) this.showElement = false;
        else if (!this.showElement) this.showElement = true;
    }

}
