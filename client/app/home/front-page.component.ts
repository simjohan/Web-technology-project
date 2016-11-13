import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { MovieService } from './../movie/movie.service';
import { FrontPageService } from './front-page.service';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: "module.id",
    // Selector "front-page" lets other components use the template into their own template
    selector: "front-page",
     //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'front-page.component.html',
    // styleUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['front-page.component.css'],
    // The providers are the services that lets us use their functions
    providers: [MovieService, FrontPageService]
})

/**
 * Exporting the class FrontPageComponent, so other components have access to it
 */
export class FrontPageComponent implements  OnInit {
    //Add variables with the following content. These variables can now be used by for example the template
    newlyReviews = "Newly Reviewed";
    newlyVisited = "Newly Visisted";

    constructor (private movieService: MovieService, private frontPageService: FrontPageService) {}

    private recentlyVisitedMovies: Object = [];

    /**
     * Runs the getMovies and gerRecentlyVisitedMovies when the page is loaded
     */
    ngOnInit() {
        this.getMovies();
        this.getRecentlyVisitedMovies();
    }

    data: Object;

    /**
     * Uses the movieService to get the newly reviewed movies, and store it in the data variable
     */
    getMovies():void {
      this.movieService.getNewlyReviewedMovies().subscribe(data => this.data = data, error => console.log(error));
    }


    /**
     * Uses the frontPageService to get the recently visited movies, and store it in the recentlyVisitedMovies variable
     */
    getRecentlyVisitedMovies(): void {
        this.frontPageService.recentlyVisitedMovies().subscribe(data => this.recentlyVisitedMovies = data, error => console.log(error));
    }

}
