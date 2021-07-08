import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellsService } from '../cells.service';
import Cell, { CellStatus } from '../../models/cell';

@Component({
  selector: 'app-cells-grid',
  templateUrl: './cells-grid.component.html',
  styleUrls: ['./cells-grid.component.css'],
})
export class CellsGridComponent implements OnInit {
  noOfCols: number;
  noOfRows: number;
  @Input() cells: Cell[][] = [];
  @Input() selectedCell: Cell;
  @Output() cellClick = new EventEmitter<Cell>();

  colCharList: string[] = [];
  constructor(private cellsService: CellsService) {}

  ngOnInit() {
    if (this.cells) {
      this.noOfRows = this.cells.length;
      this.noOfCols = this.cells[0] ? this.cells[0].length : 0;
      this.genrateColHeaders();
    }
  }

  genrateColHeaders() {
    for (let i = 0; i < this.noOfCols; i++) {
      this.colCharList.push(this.cellsService.colName(i));
    }
  }
  isMarked(cell: Cell) {
    return cell.status === CellStatus.MARKED;
  }
  onCellClick(cell: Cell) {
    if (this.isMarked(cell)) {
      return;
    }
    this.cellClick.emit(cell);
  }
}
