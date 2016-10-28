import {Pipe, PipeTransform} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'ReviewSorterPipe',
})

export class ReviewSorterPipe implements PipeTransform {
    transform(value, args) {

        if(!value) return;

        console.log("");
        console.log("Args: " + args);
        console.log(value);

        if (args == "rating-desc") {
            value.sort((a, b) => {
                if (a.rating < b.rating) return 1;
                if (a.rating > b.rating) return -1;
                return 0;
            });
        }

        else if (args == "rating-asc") {
            value.sort((a, b) => {
                if (a.rating < b.rating) return -1;
                if (a.rating > b.rating) return 1;
                return 0;
            });
        }

        else if (args == "name-asc") {
            value.sort((a, b) => {
                if (a.user < b.user) return 1;
                if (a.user > b.user) return -1;
                return 0;
            });
        }

        else if (args == "name-desc") {
            value.sort((a, b) => {
                if (a.user < b.user) return -1;
                if (a.user > b.user) return 1;
                return 0;
            });
        }

        console.log(value);
        return value;

    }

}