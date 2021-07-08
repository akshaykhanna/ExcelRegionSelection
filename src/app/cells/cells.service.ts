import { Injectable } from '@angular/core';
import Cell, { CellStatus } from '../models/cell';
import { HttpService } from '../http.service';
import { map } from 'rxjs/operators';
import GraphQLResponse, { DataTableResponse, CellsResponse } from '../models/graphql';
import { Observable } from 'rxjs/internal/Observable';
import { Data } from '../models/data-table';

const dataTableCellsQuery = `query getCell {
  dataTable(id: "2") {
    versions {
      versionNumber
      data {
        rows {
          columnData
        }
      }
    }
  }
}`;
@Injectable({
  providedIn: 'root',
})

export class CellsService {
  constructor(private httpService: HttpService) {}

  public getCellsData(): Observable<Data> {
    return this.httpService.graphQLRequest(dataTableCellsQuery)
    .pipe(
      map((resp: GraphQLResponse<CellsResponse>) => {
         return resp.data.dataTable.versions[0].data;
      })
    );
  }

  public getCells(rows: number, cols: number): Cell[][] {
    const cells: Cell[][] = [];
    let counter = 0;
    for (let i = 0; i < rows; i++) {
      const cellsRow = [];
      for (let j = 0; j < cols; j++) {
        if ((counter + 1) % 10 === 0) {
          cellsRow.push(new Cell(this.colName(j), i + 1, String(++counter), CellStatus.MARKED));
        } else {
          cellsRow.push(new Cell(this.colName(j), i + 1, String(++counter)));
        }

      }
      cells.push(cellsRow);
    }
    console.log(cells);
    return cells;
  }
  public colName(n: number) {
    const ordA = 'a'.charCodeAt(0);
    const ordZ = 'z'.charCodeAt(0);
    const len = ordZ - ordA + 1;
    let s = '';
    while (n >= 0) {
      s = String.fromCharCode((n % len) + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
    return s.toUpperCase();
  }
}
