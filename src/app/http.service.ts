import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './config';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  graphQLRequest(query, variables = {}): Observable<any> {
   return this.http
      .post(API_URL, {
        query,
        variables,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }
}
