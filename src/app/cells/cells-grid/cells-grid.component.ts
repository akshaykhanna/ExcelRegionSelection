import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cells-grid',
  templateUrl: './cells-grid.component.html',
  styleUrls: ['./cells-grid.component.css'],
})
export class CellsGridComponent implements OnInit {
  @Input() noOfCols = 10;
  @Input() noOfRows = 15;
  colCharList: string[] = [];
  rowList: number[] = [];
  constructor() {}

  ngOnInit() {
    this.genrateCols();
    this.genrateRows();
  }
  genrateCols() {
    for (let i = 0; i < this.noOfCols; i++) {
      this.colCharList.push(colName(i));
    }
    console.log(this.colCharList);
  }
  genrateRows() {
    for (let i = 0; i < this.noOfRows; i++) {
      this.rowList.push(i);
    }
  }
  genratedRowData(rowNo): string[] {
    const rowData = [];
    for (let i = 0; i < this.noOfCols; i++) {
      rowData.push(colName(i) + '' + (rowNo + 1));
    }
    console.log(rowData);
    return rowData;
  }
}

function colName(n: number) {
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
