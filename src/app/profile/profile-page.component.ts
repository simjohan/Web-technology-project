import {Component, HostListener, NgZone} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ReviewService} from "../movie/review.service";


/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: "module.id",
    // Selector "profile" lets other components use the template into their own template
    selector: "profile",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'profile-page.component.html',
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['profile-page.component.css'],
    providers: [ReviewService]
})

/**
 * Exporting the class ProfilePageComponent, so other components have access to it
 */
export class ProfilePageComponent {
    ///Add a reviewTitle to the movie-review that is added in the movie-page.component.html
    reviewTitle = "ReviewTitle";

    // Variables for days!
    sliderValue:number = 0;
    nameSearched:string = "";
    toggle:boolean = false;
    format:string = "";
    ratingToggle:boolean = false;
    nameToggle:boolean = false;

    private reviews: any = [];
    private userId: any;

    constructor (private reviewService: ReviewService, private _ngZone: NgZone) {}

    // On init of lifecycle call this function
    ngOnInit() {
        let self = this;
        //Use the facebook-api to get the ID from the user that is logged in
        FB.api("/me", function(response: any){
            self._ngZone.run(() => {
                self.userId = response.id;
                self.getUserReviews(response.id);
            })
        });
    }

    // Get all reviews for a specific movie id
    getUserReviews(userId: any):void {
        // Subscribe and update the reviews array whenever possible
        this.reviewService.getUserReviews(userId).subscribe(
            data => this.reviews = data,
            error => console.log(error),
            () => this.summarizeRatings(this.reviews) // Execute function whenever reviews array is updated
        );
    }


    getDocumentHeight() {
        const body = document.body;
        const html = document.documentElement;

        return Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight)
    }

    @HostListener('window:scroll', ['$event'])
    loadReviews() {
        if ((document.body.scrollTop+1) >= this.getDocumentHeight() - window.innerHeight) {
            console.debug("Scroll Event");

            this.getUserReviews(this.userId);

        }
    }

    // Summarizes the ratings to be presented in the doughnut chart
    summarizeRatings(reviews: any){
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
