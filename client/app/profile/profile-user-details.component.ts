import {Component, NgZone, OnInit} from '@angular/core';
import { ProfileService } from './profile.service';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component ({
    //moduleId makes it possible to use "templateUrl" - Angular 2 would look for the files at root level if we do not add this.
    moduleId: module.id,
    // Selector "profile-user-details" lets other components use the template into their own template
    selector: "profile-user-details",
    //TemplateUrl tells the component where it can find the HTML-code it is going to show
    templateUrl: 'profile-user-details.component.html',
    // stylrUlrs tells the component where it can find the CSS-code that it is going to use
    styleUrls: ['profile-user-details.component.css'],
    // Provider tells the component which service to use
    providers: [ProfileService]
})

/**
 * Exporting the class ProfilePageComponent, so other components have access to it
 */
export class ProfileUserDetailsComponent  implements OnInit{

    private userById: Object;

    constructor (private profileService: ProfileService, private _ngZone: NgZone) {}

    // On start of lifecycle
    ngOnInit() {
        let self = this;
        //Use the facebook-api to get the ID from the user that is logged in
        FB.api("/me", function(response){
            self._ngZone.run(() => {
                self.getUserById(response.id);
            })
        });
    }

    // Use the profileService to get a specific user from the REST API based on id.
    getUserById(userNameId):void {
        this.profileService.getUser(userNameId).subscribe(data => this.userById = data, error => console.log(error));

    }
}
