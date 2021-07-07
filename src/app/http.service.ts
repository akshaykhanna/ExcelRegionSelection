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
}
