import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch'

@Injectable()
export class MovieService {

    private newlyReviewMoviesUrl = '/api/newly-reviewed-movies';  // URL to web API
    private specificMovieUrl = '/api/specific-movie/';
    private searchResultUrl = '/api/search-results/'; // Url to web API

    constructor (private http: Http) {}

    // Get all movies from API
    getMovies(): Observable<any> {
        return this.http.get(this.newlyReviewMoviesUrl).map(res => res.json().movies);
    }

    // Get a specific movie based on id variable from API
    getMovie(id): Observable<any> {
        return this.http.get(this.specificMovieUrl + id).map(res => res.json());
    }

    // Get the movies associated with the search term from the API
    getSearchResult(searchTerm) : Observable<any> {
        return this.http.get(this.searchResultUrl + searchTerm).map(res => res.json().search_result);
    }

}