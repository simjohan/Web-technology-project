import { Component, OnInit, NgZone, Input, EventEmitter } from '@angular/core';

import { MovieReview } from './movie-review';
import {ReviewService} from "./review.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
    moduleId: module.id,
    selector: 'review-form',
    templateUrl: 'review-form.component.html'

})


export class ReviewFormComponent implements OnInit{

    constructor(private reviewService : ReviewService, private route : ActivatedRoute){ }


    userId = 0;
    movieId = 0;
    isUser = false;

    ratings = [0, 1, 2, 3, 4, 5];


    model = new MovieReview(this.userId, this.movieId, '', '', this.ratings[0]);
    submitted = false;
    active = true;

    // Submitting the review form. Send data to server
    onSubmit() {
        this.submitted = true;
        // _self will now reference the component object.
        let _self = this;
        // Call FB API for user id.
        FB.api('/me', function (response) {
            console.log("USER ID: " + response.id);
            _self.userId = response.id;

        //Callback function for FB API. We now have access to the data.
        }, function (callback) {
            _self.reviewService.sendReview(callback.id, _self.movieId, _self.model.review, _self.model.title, _self.model.rating);
        });
    }

    newReview(){
        this.model = new MovieReview(this.userId, this.movieId, '', '', this.ratings[0]);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    ngOnInit() {
        // get URL parameters
        let _self = this;
        this.route.params.subscribe(params => {this.movieId = params['id'];});
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                _self.isUser = true;
            } else if (response.status === 'not_authorized') {
                _self.isUser = false;
            } else {
                _self.isUser = false;
            }
        });

    }



}