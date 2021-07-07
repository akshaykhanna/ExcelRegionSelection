import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import GraphQLResponse, { DataTableResponse } from './models/graphql';
import DataTable from './models/data-table';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

const dataTablesQuery = `{
  dataTables {
    id
    title
  }
}`;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpService: HttpService) {}

  public getDataTables(): Observable<DataTable[]> {
    return this.httpService
      .graphQLRequest(dataTablesQuery)
      .pipe(
        map((resp: GraphQLResponse<DataTableResponse>) => resp.data.dataTables)
      );
  }
}
