import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie/movie.service';

@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: "module.id",
    selector: "movie-search-page",
    templateUrl: 'movie-search-page.component.html',
    providers: [MovieService],
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['movie-search-page.component.css'],
})

export class MovieSearchPageComponent implements  OnInit {


    private searchTerm: string;
    private searchResult: any;

    constructor(
        private router: Router,
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
