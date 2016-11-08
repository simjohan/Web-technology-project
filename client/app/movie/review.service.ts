import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ReviewService {

    private reviewsUrl = '/api/specific-movie-reviews/';  // URL to web API
    private userReviewsUrl = '/api/reviews/specific-user-reviews/'; // URL to web API
    private userMovieReviewsUrl = '/api/reviews/specific-user-movie-reviews/';

    constructor (private http: Http) {}

    // get the reviews from the API url, use id to find reviews for specific movie
    getReviews(id): Observable<any> {
        return this.http.get(this.reviewsUrl + id).map(res => res.json().reviews);
    }

    // get the user reviews from the API url
    getUserReviews(id): Observable<any> {
        return this.http.get(this.userReviewsUrl + id).map(res => res.json().reviews);
    }

    //Get the review the given user have written for the given movie
    getUserMovieReviews(userId, movieId): Observable<any>{
        return this.http.get(this.userMovieReviewsUrl + userId + "/" + movieId).map(res=>res.json().reviews);
    }

    // Count the ratings and summarize them into an array
    // The array contains the number of each rating at their specific index
    // If theres 2 ratings of 0, the value of reviewsRatings[0] will be 2
    summarizeRatings(reviews): Promise<any>{
        let reviewRatings = [0,0,0,0,0];
        for (let review of reviews) {
            let ratingToInt = + review.rating - 1; // Convert to int
            reviewRatings[ratingToInt] = reviewRatings[ratingToInt] + 1;
            console.log(ratingToInt);
        }
        return Promise.resolve(reviewRatings);
    }

    sendReview(userId, movieId, title, rating, review){
        let body = JSON.stringify([userId, movieId, title, rating, review]);
        let headers = new Headers();
        let id = userId + movieId;
        let addReviewUrl = 'http://localhost:3000/api/reviews/add/' + id;
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        return this.http.post(addReviewUrl, body, options).subscribe();
    }

    // Test method to test the removal of compiled files
    allJsRemovalTest(){
        let test = "This is just a test";
    }

}