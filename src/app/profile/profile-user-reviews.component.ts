import {Component, Input} from '@angular/core';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: "module.id",
    // Selector "profile-user-reviews" lets other components use the template into their own template
    selector: "profile-user-reviews",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'profile-user-reviews.component.html',
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['../movie/reviews.component.css'],
})

/**
 * Exporting the class ProfilePageComponent, so other components have access to it
 */
export class ProfileUserReviewComponent {
    //@Input() lets other components send in the values, which this component inputs here. This value can be used in the template.
    @Input() review: any;
    @Input() reviewTitle: string;
    @Input() rating: number;
    @Input() userName: string;
    @Input() ratingText: string;

    private stars: String = "";
    private showElement = false;

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
