import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from "./home/front-page.component";
import { MoviePageComponent } from "./movie/movie-page.component";

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
