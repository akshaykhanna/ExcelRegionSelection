import { Component, OnInit, Input } from '@angular/core';
import { CellsService } from '../cells.service';
import Cell from '../../models/cell';

@Component({
  selector: 'app-cells-grid',
  templateUrl: './cells-grid.component.html',
  styleUrls: ['./cells-grid.component.css'],
})
export class CellsGridComponent implements OnInit {
  noOfCols: number;
  noOfRows: number;
  @Input() cells: Cell[][] = [];

  colCharList: string[] = [];
  constructor(private cellsService: CellsService) {}

  ngOnInit() {
    this.cells = this.cellsService.getCells(7, 9);
    console.log('this.cells:', this.cells);
    this.noOfRows = this.cells.length;
    this.noOfCols = this.cells[0].length;
    this.genrateColHeaders();
  }

  genrateColHeaders() {
    for (let i = 0; i < this.noOfCols; i++) {
      this.colCharList.push(this.cellsService.colName(i));
    }
    console.log('this.colCharList:', this.colCharList);
  }
}
