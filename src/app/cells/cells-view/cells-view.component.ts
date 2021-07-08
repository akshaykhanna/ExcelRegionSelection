import { Component, OnInit } from '@angular/core';
import Cell, { CellStatus } from '../../models/cell';
import { CellsService } from '../cells.service';
import { Data } from 'src/app/models/data-table';

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
    this.cellsService.getCellsData().subscribe((data: Data) => {
      console.log('ak dataTables: ', data);
    });
    this.cells = this.cellsService.getCells(7, 9);
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
