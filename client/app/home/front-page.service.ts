import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class FrontPageService {

    private reviewsUrl = '/api/recent-movies';  // URL to web API
    constructor (private http: Http) {}

    recentlyVisitedMovies(): Observable<any> {
        return this.http.get(this.reviewsUrl).map(res => res.json().recent_movies);
    }

}