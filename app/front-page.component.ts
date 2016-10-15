import { Component } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: "front-page",
    templateUrl: 'front-page.component.html',
})

export class FrontPageComponent {
    newlyReviews = "Nyeste Anmeldelser";
    newlyVisited = "Nylig Besøkte";
}