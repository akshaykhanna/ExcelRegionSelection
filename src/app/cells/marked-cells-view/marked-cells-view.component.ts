import { Component, OnInit, Input } from '@angular/core';
import Cell, { CellStatus } from 'src/app/models/cell';

@Component({
  selector: 'app-marked-cells-view',
  templateUrl: './marked-cells-view.component.html',
  styleUrls: ['./marked-cells-view.component.css'],
})
export class MarkedCellsViewComponent implements OnInit {
  @Input() markedCells = [];
  constructor() {}

  ngOnInit() {}
  unMarkCell(cell: Cell) {
    cell.status = CellStatus.NORMAL;
  }
}
