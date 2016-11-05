import {Pipe, PipeTransform} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'ReviewRatingFilterPipe'
})


export class ReviewRatingFilterPipe implements PipeTransform {
    // This will filter out the review components that does not meet the requirements
    transform(value, args?) {
        let minRating = args;
        let review = value;
        let reviews = []; // Empty array to hold the new reviews
        for (var i in review){
            let rating = +review[i].rating // Convert to number
            if (rating >= minRating){
                // Push the review that meet the requirement into the reviews array
                reviews.push(review[i]);
            }
        }
        // Return a list of reviews that meet the requirement
        return reviews;
    }

}