import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch'

@Injectable()
export class MovieService {

    // REST API URLs
    private newlyReviewMoviesUrl: string = '/api/newly-reviewed-movies';
    private specificMovieUrl: string = '/api/specific-movie/';
    private searchResultUrl:string = '/api/get/movies/';
    private getAllMoviesUrl:string = '/api/get/movies';

    constructor (private http: Http) {}


    // Get ALL the movies
    getAllMovies(): Observable<any> {
        return this.http.get(this.getAllMoviesUrl).map(res => res.json().search_result);
    }

    // Get get newly reviwed movies
    getNewlyReviewedMovies(): Observable<any> {
        return this.http.get(this.newlyReviewMoviesUrl).map(res => res.json().movies);
    }

    // Get a specific movie based on id variable from API
    getMovie(id: any): Observable<any> {
        return this.http.get(this.specificMovieUrl + id).map(res => res.json().movie);
    }

    // Get the movies associated with the search term from the API
    getSearchResult(searchTerm: string) : Observable<any> {
        return this.http.get(this.searchResultUrl + searchTerm).map(res => res.json().search_result);
    }

}