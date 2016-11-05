import { Component, OnInit, NgZone, Input, EventEmitter } from '@angular/core';

import { MovieReview } from './movie-review';
import {ReviewService} from "./review.service";
import {ActivatedRoute} from "@angular/router";



@Component({
    moduleId: module.id,
    selector: 'review-form',
    templateUrl: 'review-form.component.html'

})


export class ReviewFormComponent implements OnInit{

    constructor(private reviewService : ReviewService, private route : ActivatedRoute){ }


    userId = 0;
    movieId = 0;

    ratings = [0, 1, 2, 3, 4, 5];


    model = new MovieReview(this.userId, this.movieId, '', this.ratings[0], '');
    submitted = false;
    active = true;

    // Submitting the review form. Send data to server
    onSubmit() {
        this.submitted = true;
        console.log(JSON.stringify(this.model));
        this.reviewService.sendReview(this.userId, this.movieId, this.model.title, this.model.rating, this.model.review);
    }

    newReview(){
        this.model = new MovieReview(this.userId, this.movieId, '', this.ratings[0], '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    ngOnInit() {
        // get URL parameters
        this.route.params.subscribe(params => {this.movieId = params['id'];});
    }


}