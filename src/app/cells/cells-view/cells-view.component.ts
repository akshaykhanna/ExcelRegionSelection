import { Component, OnInit } from '@angular/core';
import Cell from '../../models/cell';
import { CellsService } from '../cells.service';

@Component({
  selector: 'app-cells-view',
  templateUrl: './cells-view.component.html',
  styleUrls: ['./cells-view.component.css'],
})
export class CellsViewComponent implements OnInit {
  cells: Cell[][];
  selectedCell: Cell;
  constructor(private cellsService: CellsService) {}

  ngOnInit() {
    this.cells = this.cellsService.getCells(7, 9);
  }
  selectCell(cell: Cell) {
    this.selectedCell = cell;
  }
  resetSelectedCell() {
    this.selectedCell = null;
  }
}
