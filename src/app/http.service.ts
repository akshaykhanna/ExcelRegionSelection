import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get('http://jsonplaceholder.typicode.com/users')
      .subscribe((resp) => {
        console.log('res: ', resp);
      });
  }
  postData() {
    this.http
      .post<any>('https://reqres.in/api/posts', {
        title: 'Angular POST Request Example',
      })
      .subscribe((data) => {
        console.log('data: ', data);
      });
  }
  graphQLRequest(query) {
    this.http
      .post(API_URL, {
        query,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe((data) => {
        console.log('gqlResp: ', data);
      });
  }
}
