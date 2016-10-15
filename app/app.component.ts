import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
        <navigation-bar></navigation-bar>
        <front-page></front-page>
    `
})
export class AppComponent {
    title = 'Index-page!';
}
