import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './../movie/movie.service';


/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: "module.id",
    // Selector "movie" lets other components use the template into their own template
    selector: "movie-search-page",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'movie-search-page.component.html',
    // Providers tell the component which service to use.
    providers: [MovieService],
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['movie-search-page.component.css'],
})

export class MovieSearchPageComponent implements  OnInit {


    private searchTerm: any;
    private searchResult: any;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute) {
    }

    // Fire when component is created
    ngOnInit() {

        // Find the parameter of the route and assign it to the searchTerm variable
        this.route.params.subscribe(params => {
            this.searchTerm = params['query'];
            // If a term is supplied, find movies matching to the term
            if (typeof this.searchTerm !== 'undefined'){
                this.getSearchResult(this.searchTerm);
            }
            // Get all movies if no term is supplied.
            else {
                this.getAllMovies();
            }
        });

    }

    // Gets all movies
    getAllMovies(){
        this.movieService.getAllMovies().subscribe(
            data => this.searchResult = data, // Set searchResult when data is updated
            error => console.log(error)
        );
    }

    // Get movie based on search term
    getSearchResult(searchTerm: string){
        this.movieService.getSearchResult(searchTerm).subscribe(
            data => this.searchResult = data, // Set searchResult when data is updated
            error => console.log(error)
        );
    }
}