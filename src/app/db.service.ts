import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DatabaseService {

    //private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http){ }


    insertUser(id: string, name: string, email: string, imgurl: string){
        let body = JSON.stringify([id, name, email, imgurl]);
        let headers = new Headers();
        let addUserUrl = '/api/users/add/' + id;
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        return this.http.post(addUserUrl, body, options).subscribe();
         //   .map((res: Response) => res.json())
         //   .catch(this.handleError);
    }

    insertMovie(id: string, title: string, viewCount: number){
        let body = JSON.stringify([id, title, viewCount]);
        let headers = new Headers();
        let addMovieUrl = '/api/movies/add/' + id;
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        return this.http.post(addMovieUrl, body, options).subscribe();
    }

    removeUser(id: string){
        let body = JSON.stringify([id]);
        let headers = new Headers();
        let removeUserUrl = '/api/users/remove/' + id;
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        return this.http.post(removeUserUrl, body, options).subscribe();
        //   .map((res: Response) => res.json())
        //   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}