import { Component } from '@angular/core';

/**
 * @Component allows you to mark a class as an Angular component and provide additional metadata that determines
 * how the component should be processed, instantiated and used at runtime.
 */
@Component({
     //Selector "my-app" lets other components use the template into their own template.
    selector: 'my-app',
    //"navigation-bar" are selectors of other components
    template:`
        <!-- Adds the navigation bar -->
        <navigation-bar></navigation-bar>
        <!-- Shows the outlet of the routing - if it is /home it shows the front page. 
        See "app-routing.module.ts" for more detail on what it should show.-->
        <div class="main-container">
            <router-outlet></router-outlet>
        </div>
    `
})


/**
 * Exporting the class AppComponent, so other components have access to it
 */
export class AppComponent {

}
