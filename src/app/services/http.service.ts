import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FAKE_API_URL } from '../models/urls';
import { User } from '../models/user';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // Fetches all users.
  getAllUsersService(): Observable<User[]> {
    return this.http
      .get<User[]>(`${FAKE_API_URL}users`)
      .pipe(catchError(this.errorHandler));
  }

  // Fetches all posts by user id.
  //https://jsonplaceholder.typicode.com/posts?userId=1
  getUserPostService(userId: number): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${FAKE_API_URL}posts?userId=${userId}`)
      .pipe(catchError(this.errorHandler));
  }

  // Call back method for error handling
  private errorHandler(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.log('Server Side Error: ', errorResponse);
    }
    return throwError(
      'There was a problem with the service. we are notified and working on it'
    );
  }
}
