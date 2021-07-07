import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

const dataTablesQuery = `{
  dataTables {
    id
    title
  }
}`;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpService: HttpService) { }

  public getDataTables() {
    this.httpService.graphQLRequest(dataTablesQuery);
  }

}
