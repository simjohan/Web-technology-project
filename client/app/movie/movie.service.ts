import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch'

@Injectable()
export class MovieService {

    private homeUrl = '/home';  // URL to web API
    constructor (private http: Http) {}

    getMovies(): Observable<any> {
        return this.http.get(this.homeUrl).map(res => res.json().movies);
    }

}
