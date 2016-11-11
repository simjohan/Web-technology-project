import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileService {
    //the url to the app.get-function in routes.js
    private specificUserUrl = '/api/users/get-user/';

    constructor (private http: Http) {}

    // Get a specific user based on id variable from API
    getUser(id): Observable<any> {
        return this.http.get(this.specificUserUrl + id).map(res => res.json().user_by_id);
    }
 }

