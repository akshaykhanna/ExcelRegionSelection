import { Injectable } from '@angular/core';
import Cell from '../models/cell';

@Injectable({
  providedIn: 'root',
})
export class CellsService {
  constructor() {}

  public getCells(rows: number, cols: number): Cell[][] {
    const cells: Cell[][] = [];
    let counter = 0;
    for (let i = 0; i < rows; i++) {
      const cellsRow = [];
      for (let j = 0; j < cols; j++) {
        cellsRow.push(new Cell(this.colName(j), i + 1, String(++counter)));
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
