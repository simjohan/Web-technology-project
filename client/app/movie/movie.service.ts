import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch'

@Injectable()
export class MovieService {

    // REST API URLs
    private newlyReviewMoviesUrl = '/api/newly-reviewed-movies';
    private specificMovieUrl = '/api/specific-movie/';
    private searchResultUrl = '/api/get/movies/';
    private getAllMoviesUrl = '/api/get/movies';

    constructor (private http: Http) {}


    // Get ALL the movies from API
    getAllMovies(): Observable<any> {
        return this.http.get(this.getAllMoviesUrl).map(res => res.json().search_result);
    }

    // Get get newly reviwed movies from API
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