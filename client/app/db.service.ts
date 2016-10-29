import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DatabaseService {

    //private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http){ }


    insertUser(id, name, email, imgurl){
        console.log("IN DatabaseService insertUser!");
        let body = JSON.stringify([id, name, email, imgurl]);
        let headers = new Headers();
        let userUrl = 'http://localhost:3000/api/user/' + id;
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        return this.http.post(userUrl, body, options).subscribe();
         //   .map((res: Response) => res.json())
         //   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}