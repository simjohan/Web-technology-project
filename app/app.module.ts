import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavbarComponent } from "./navbar.component";
import { NavbarSearchComponent } from "./navbar-search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        NavbarSearchComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }