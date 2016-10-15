import { Component } from '@angular/core';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component({
     //Selector "my-app" lets other components use the template into their own template.
    selector: 'my-app',
    //"navigation-bar" and "front-page" are selectors of other components
    template:`
        <navigation-bar></navigation-bar>
        <front-page></front-page>
    `
})

/**
 * Exporting the class AppComponent, so other components have access to it
 */
export class AppComponent {

}
