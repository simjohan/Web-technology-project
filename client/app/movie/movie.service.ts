import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch'

@Injectable()
export class MovieService {

    private newlyReviewMoviesUrl = '/api/newly-reviewed-movies';  // URL to web API
    private specificMovieUrl = '/api/specific-movie/';
    constructor (private http: Http) {}

    getMovies(): Observable<any> {
        return this.http.get(this.newlyReviewMoviesUrl).map(res => res.json().movies);
    }

    getMovie(id): Observable<any> {
        return this.http.get(this.specificMovieUrl + id).map(res => res.json());
    }

}