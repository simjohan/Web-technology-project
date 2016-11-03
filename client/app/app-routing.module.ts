import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports the components we want to be able to route to
import { FrontPageComponent } from "./home/front-page.component";
import { MoviePageComponent } from "./movie/movie-page.component";
import { ProfilePageComponent } from  './profile/profile-page.component';
import { MovieSearchPageComponent } from './movie-search/movie-search-page.component';

//Imports AuthGuard
import { AuthGuard }    from  './common/auth.guard';

/**
 * path: the path you see after the url
 * redirectTo: used to show which page we want to show when the user have not chosen any page yet
 * pathMatch: how much of the path that has to match
 * component: Which components are going to be shown when the given path is chosen
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: FrontPageComponent },
    { path: 'movie/:id', component: MoviePageComponent }, //movie/:id+
    /**
     * By adding canActivate here, the application only let the user get to the route
     * if the canActivate function in AuthGuard returns true
     */
    { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]}, //profile/:id+
    { path: 'search/:query',  component: MovieSearchPageComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
