import { Component, OnInit, NgZone, Input, EventEmitter } from '@angular/core';

import { MovieReview } from './movie-review';
import {ReviewService} from "./review.service";



@Component({
    moduleId: module.id,
    selector: 'review-form',
    templateUrl: 'review-form.component.html'

})


export class ReviewFormComponent{

    constructor(private reviewService : ReviewService){ }



    ratings = [0, 1, 2, 3, 4, 5];


    model = new MovieReview('', this.ratings[0], '');
    submitted = false;
    active = true;
    onSubmit() { this.submitted = true;
    console.log(JSON.stringify(this.model))}
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newReview(){
        this.model = new MovieReview('', this.ratings[0], '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }



}