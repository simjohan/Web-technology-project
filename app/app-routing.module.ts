import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports the components we want to be able to route to
import { FrontPageComponent } from "./home/front-page.component";
import { MoviePageComponent } from "./movie/movie-page.component";

/**
 * path: the path you see after the url
 * redirectTo: used to show which page we want to show when the user have not chosen any page yet
 * pathMatch: how much of the path that has to match
 * component: Which components are going to be shown when the given path is chosen
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: FrontPageComponent },
    { path: 'movie', component: MoviePageComponent } //movie/:id
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
