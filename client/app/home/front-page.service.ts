import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class FrontPageService {

    // URL to web API
    private reviewsUrl = '/api/recent-movies';

    constructor (private http: Http) {}

    // Get recently visited movies through the rest API
    recentlyVisitedMovies(): Observable<any> {
        return this.http.get(this.reviewsUrl).map(res => res.json().recent_movies);
    }

}