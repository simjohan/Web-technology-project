import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import 'rxjs/add/operator/map'
import { MovieService } from './../movie/movie.service';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "front-page" lets other components use the template into their own template
    selector: "front-page",
     //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'front-page.component.html',
    providers: [MovieService]
})

/**
 * Exporting the class FrontPageComponent, so other components have access to it
 */
export class FrontPageComponent implements  OnInit {
    //Add variables with the following content. These variables can now be used by for example the template
    newlyReviews = "Newly Reviewed";
    newlyVisited = "Newly Visisted";


    constructor (private movieService: MovieService) {}

    ngOnInit() { this.getMovies(); }

    data: Object;

    getMovies():void {
      this.movieService.getMovies().subscribe(data => this.data = data, error => console.log(error));
    }

}