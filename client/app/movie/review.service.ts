import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ReviewService {

    private reviewsUrl = '/api/specific-movie-reviews/';  // URL to web API
    constructor (private http: Http) {}

    getReviews(id): Observable<any> {
        return this.http.get(this.reviewsUrl + id).map(res => res.json().reviews);
    }


}