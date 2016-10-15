import { Component, Input } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: "movie-title",
    templateUrl: 'movie-title.component.html',
})

export class MovieTitleComponent {
    @Input() titleValue = "Ingen tittel er gitt :O";
}