import { Component, OnInit } from '@angular/core';
import { ReviewService } from './review.service';
import { ActivatedRoute } from '@angular/router';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "movie" lets other components use the template into their own template
    selector: "movie",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'movie-page.component.html',
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['movie-page.component.css'],
    providers: [ReviewService]

})

/**
 * Exporting the class MovieComponent, so other components have access to it
 */
export class MoviePageComponent{
    //Add a reviewTitle to the movie-review that is added in the movie-page.component.html
    reviewTitle = "ReviewTitle";

    private reviews: Object;
    private movieId;
    private sub: any;      // -> Subscriber

    constructor (private reviewService: ReviewService, private route: ActivatedRoute) {}

    ngOnInit() {
        // get URL parameters
        this.sub = this.route.params.subscribe(params => {this.movieId = params['id']; });
        console.log(this.sub);
        this.getReviews(this.movieId);
    }

    getReviews(movieId):void {
        console.log(movieId);
        this.reviewService.getReviews(movieId).subscribe(data => this.reviews = data, error => console.log(error));
    }



}
