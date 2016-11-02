import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ReviewService {

    private reviewsUrl = '/api/specific-movie-reviews/';  // URL to web API

    constructor (private http: Http) {}

    // get the reviews from the API url, use id to find reviews for specific movie
    getReviews(id): Observable<any> {
        return this.http.get(this.reviewsUrl + id).map(res => res.json().reviews);
    }

    // Count the ratings and summarize them into an array
    // The array contains the number of each rating at their specific index
    // If theres 2 ratings of 0, the value of reviewsRatings[0] will be 2
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