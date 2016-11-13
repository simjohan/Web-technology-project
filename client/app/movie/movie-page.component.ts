import {Component, HostListener} from '@angular/core';
import { ReviewService } from './review.service';
import { ActivatedRoute } from '@angular/router';
/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "movie" lets other components use the template into their own template
    selector: "movie",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'movie-page.component.html',
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['movie-page.component.css'],
    // Providers tell the component which service to use.
    providers: [ReviewService],
})

/**
 * Exporting the class MovieComponent, so other components have access to it
 */
export class MoviePageComponent{
    //Add a reviewTitle to the movie-review that is added in the movie-page.component.html
    reviewTitle = "ReviewTitle";

    sliderValue:number = 0;
    nameSearched:String = "";
    toggle = false;
    format = "";
    ratingToggle = false;
    nameToggle = false;

    offset = 0;

    private reviews = [];
    private movieId;

    constructor (private reviewService: ReviewService, private route: ActivatedRoute) {}

    // On init of lifecycle call this function
    ngOnInit() {
        this.route.params.subscribe(params => {this.movieId = params['id']; }); // get URL parameters
        this.getReviews(this.movieId);
    }

    // Get 2 reviews for a specific movie id
    getReviews(movieId):void {
        // Subscribe and update the reviews array whenever possible
        this.reviewService.getPaginatedReviews(movieId, 2, this.offset).subscribe(
            data => this.reviews = this.reviews.concat(data),
            error => console.log(error),
            () => this.summarizeRatings(this.reviews) // Execute function whenever reviews array is updated
        );
    }

    // The height of the document, this is needed in the function loadReviews
    getDocumentHeight() {
        const body = document.body;
        const html = document.documentElement;

        return Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight)
    }

    // Loads reviews if a scroll event takes place at the bottom of the page
    @HostListener('window:scroll', ['$event'])
    loadReviews() {
        if ((document.body.scrollTop+1) >= this.getDocumentHeight() - window.innerHeight) {
            console.debug("Scroll Event");
            this.offset += 2;
            this.getReviews(this.movieId);

        }
    }

    // Summarizes the ratings to be presented in the doughnut chart
    summarizeRatings(reviews){
        this.reviewService.summarizeRatings(reviews).then(
            data => this.doughnutChartData = data,
            error => console.log(error)
        );
    }

    // Set the format based on the toggle boolean
    toggleSortByRating(){
        this.ratingToggle ? this.format = "rating-asc" : this.format = "rating-desc";
        this.ratingToggle = !this.ratingToggle;
    }

    // Set the format based on the toggle boolean
    toggleSortByName() {
        this.nameToggle ? this.format = "name-asc" : this.format = "name-desc";
        this.nameToggle = !this.nameToggle;
    }

    /*
    Chart
     */

    // Doughnut variables
    public doughnutChartLabels:string[] = ['1', '2', '3', '4', '5'];
    public doughnutChartType:string = 'doughnut';
    public doughnutChartData:number[] = [];

    // Currently not in use, kept here to remember the possibility of usage for further development
    public chartClicked(e:any):void {
        // console.log(e);
    }

    // Currently not in use, kept here to remember the possibility of usage for further development
    public chartHovered(e:any):void {
        // console.log(e);
    }

}
