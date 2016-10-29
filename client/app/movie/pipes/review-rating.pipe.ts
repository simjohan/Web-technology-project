import {Pipe, PipeTransform} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'ReviewRatingPipe'
})

export class ReviewRatingPipe implements PipeTransform {
    transform(value, args?) {
        let minRating = args;
        let review = value;
        let reviews = [];
        for (var i in review){
            let rating = +review[i].rating
            if (rating >= minRating){
                reviews.push(review[i]);
            }
        }
        return reviews;
    }

}