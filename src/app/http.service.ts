import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  graphQLRequest() {
    const query = `{
        dataTables {
          id
          title
        }
      }`;
    this.http
      .post('http://localhost:4000/__graphq', {
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
