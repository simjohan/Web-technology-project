import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { ActivatedRoute } from '@angular/router';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "movie-detail" lets other components use the template into their own template
    selector: "movie-detail",
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['movie-detail.component.css'],
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'movie-detail.component.html',
    providers: [MovieService]
})

/**
 * Exporting the class MovieReviewComponent, so other components have access to it.
 */
export class MovieDetailComponent implements OnInit{

    private movie: Object;
    private userId;
    private sub: any;      // -> Subscriber

    constructor (private movieService: MovieService, private route: ActivatedRoute) {}

    ngOnInit() {
        // get URL parameters
        this.sub = this.route.params.subscribe(params => {this.userId = params['id']; });
        this.getMovie(this.userId);
    }

    getMovie(userId):void {
        this.movieService.getMovie(userId).subscribe(data => this.movie = data, error => console.log(error));
    }

}
