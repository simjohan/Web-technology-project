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

    summarizeRatings(reviews): Promise<any>{
        let reviewRatings = [0,0,0,0,0,0,0,0,0,0];
        for (let review of reviews) {
            let ratingToInt = + review.rating - 1; // Convert to int
            reviewRatings[ratingToInt] = reviewRatings[ratingToInt] + 1;
            console.log(ratingToInt);
        }
        return Promise.resolve(reviewRatings);
    }
}