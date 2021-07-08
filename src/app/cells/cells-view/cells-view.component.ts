import { Component, OnInit } from '@angular/core';
import Cell, { CellStatus } from '../../models/cell';
import { CellsService } from '../cells.service';
import { Row } from 'src/app/models/data-table';

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
    this.cellsService.getCellsData('2').subscribe((rowsOfCell: Row[]) => {
      console.log('ak rowsOfCell: ', rowsOfCell);
      this.cells = this.cellsService.getGridCells(rowsOfCell);
    });
  }
  getMarkedCells(): Cell[] {
    const markedCells: Cell[] = [];
    for (const cellsRow of this.cells) {
      markedCells.push(
        ...cellsRow.filter((cell) => cell.status === CellStatus.MARKED)
      );
    }
    return markedCells;
  }
  selectCell(cell: Cell) {
    this.selectedCell = cell;
  }
  resetSelectedCell() {
    this.selectedCell = null;
  }
}
