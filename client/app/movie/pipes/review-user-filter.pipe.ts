import {Pipe, PipeTransform} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'ReviewUserFilterPipe'
})

export class ReviewUserFilterPipe implements PipeTransform {
    transform(value, args?) {

        let nameSearched = args;
        let review = value;
        let reviews = [];


        if ((nameSearched).length == 0) return review;

        for (var i in review){
            let username = review[i].username;
            if (username.toLowerCase().includes(nameSearched.toLowerCase())){
                reviews.push(review[i]);
            }
        }

        return reviews;
    }

}