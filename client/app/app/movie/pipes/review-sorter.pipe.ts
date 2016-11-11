import {Pipe, PipeTransform} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'ReviewSorterPipe',
})

export class ReviewSorterPipe implements PipeTransform {
    transform(value, args) {

        if(!value) return; // Check if value is defined

        // Sort rating in descending order
        if (args == "rating-desc") {
            value.sort((a: any, b: any) => {
                if (a.rating < b.rating) return 1;
                if (a.rating > b.rating) return -1;
                return 0;
            });
        }

        // Sort rating in ascending order
        else if (args == "rating-asc") {
            value.sort((a: any, b: any) => {
                if (a.rating < b.rating) return -1;
                if (a.rating > b.rating) return 1;
                return 0;
            });
        }

        // Sort name in ascending order
        else if (args == "name-asc") {
            value.sort((a: any, b: any) => {
                if (a.username < b.username) return 1;
                if (a.username > b.username) return -1;
                return 0;
            });
        }

        // Sort name in descending order
        else if (args == "name-desc") {
            value.sort((a: any, b: any) => {
                if (a.username < b.username) return -1;
                if (a.username > b.username) return 1;
                return 0;
            });
        }

        return value; // Return the newly sorted value

    }

}