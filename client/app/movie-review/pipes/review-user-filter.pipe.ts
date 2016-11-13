import {Pipe, PipeTransform} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'ReviewUserFilterPipe'
})

export class ReviewUserFilterPipe implements PipeTransform {
    // Filters reviews based on name
    transform(value: any, args?: any) {
        let nameSearched = args;
        let review = value;
        let reviews: any[] = []; // Hold the filtered reviews
        if ((nameSearched).length == 0) return review; // If no term was entered, return review as is
        for (var i in review){
            let username = review[i].username;
            if (username.toLowerCase().includes(nameSearched.toLowerCase())){
                reviews.push(review[i]); // If name meets requirement, push it to the new reviews array
            }
        }
        return reviews; // Return the filtered reviews
    }

}