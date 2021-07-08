import { Injectable } from '@angular/core';
import Cell, { CellStatus } from '../models/cell';
import { HttpService } from '../http.service';
import { map } from 'rxjs/operators';
import GraphQLResponse, { CellsResponse } from '../models/graphql';
import { Observable } from 'rxjs/internal/Observable';
import { Row } from '../models/data-table';

const dataTableCellsQuery = `query getCell($id: ID!) {
  dataTable(id: $id) {
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

  public getCellsData(id: string, verNo: number): Observable<Row[]> {
    const variables = `{
      "id": "${id}"
      }`;
    return this.httpService.graphQLRequest(dataTableCellsQuery, variables).pipe(
      map((resp: GraphQLResponse<CellsResponse>) => {
        return resp.data.dataTable.versions.find(
          (ver) => ver.versionNumber === verNo
        ).data.rows;
      })
    );
  }

  public getGridCells(rowsOfCells: Row[]): Cell[][] {
    const cells: Cell[][] = [];
    for (let i = 0; i < rowsOfCells.length; i++) {
      const cellsRow = [];
      const colsOfCells = rowsOfCells[i].columnData;
      for (let j = 0; j < colsOfCells.length; j++) {
        const colOfCell = colsOfCells[j];
        cellsRow.push(new Cell(this.colName(j), i + 1, colOfCell));
      }
      cells.push(cellsRow);
    }
    return cells;
  }
  public getCells(rows: number, cols: number): Cell[][] {
    const cells: Cell[][] = [];
    let counter = 0;
    for (let i = 0; i < rows; i++) {
      const cellsRow = [];
      for (let j = 0; j < cols; j++) {
        if ((counter + 1) % 10 === 0) {
          cellsRow.push(
            new Cell(
              this.colName(j),
              i + 1,
              String(++counter),
              CellStatus.MARKED
            )
          );
        } else {
          cellsRow.push(new Cell(this.colName(j), i + 1, String(++counter)));
        }
      }
      cells.push(cellsRow);
    }
    return cells;
  }
  public colName(n: number): string {
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
