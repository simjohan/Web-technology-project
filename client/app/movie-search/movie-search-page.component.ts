import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './../movie/movie.service';

@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    selector: "movie-search-page",
    templateUrl: 'movie-search-page.component.html',
    providers: [MovieService],
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['movie-search-page.component.css'],
})

export class MovieSearchPageComponent implements  OnInit {


    private searchTerm;
    private searchResult;

    constructor(
        private router: Router,
        private movieService: MovieService,
        private route: ActivatedRoute) {
        // Detect changes in router to let the movie component know when to re-render
        router.events.subscribe(() => {
            if(this.searchTerm){
                console.log("True");
                this.getSearchResult(this.searchTerm);
            }
            else {
                console.log("False");
                this.getAllMovies();
            }
        });

    }

    // Fire when component is created
    ngOnInit() {

        // Find the parameter of the route and assign it to the searchTerm variable
        this.route.params.subscribe(params => {
            this.searchTerm = params['query'];
        });

        console.log(this.searchTerm);



    }

    getAllMovies(){
        this.movieService.getAllMovies().subscribe(
            data => this.searchResult = data,
            error => console.log(error)
        );
    }

    getSearchResult(searchTerm){
        this.movieService.getSearchResult(searchTerm).subscribe(
            data => this.searchResult = data,
            error => console.log(error)
        );
    }
}