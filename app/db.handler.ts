import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DatabaseService {

    //private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http){}


    insertUser(id, name, email, imgurl){
        let body = JSON.stringify([id, name, email, imgurl]);
        let headers = new Headers();
        let userUrl = 'http://localhost:3000/profile';
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({headers: headers});
        return this.http.post(userUrl, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}