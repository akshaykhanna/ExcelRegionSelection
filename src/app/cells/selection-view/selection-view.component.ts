import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import Cell, { CellStatus } from '../../models/cell';

@Component({
  selector: 'app-selection-view',
  templateUrl: './selection-view.component.html',
  styleUrls: ['./selection-view.component.css'],
})
export class SelectionViewComponent implements OnInit, OnChanges {
  @Input() selectedCell: Cell;
  @Output() markCell = new EventEmitter();
  isCellSelected: boolean;
  constructor() {}

  ngOnInit() {
    this.isCellSelected = this.selectedCell
      ? this.selectedCell.id !== ''
      : false;
  }

  ngOnChanges(): void {
    this.isCellSelected = this.selectedCell
      ? this.selectedCell.id !== ''
      : false;
  }
  onMarkCell() {
    this.selectedCell.status = CellStatus.MARKED;
    this.markCell.emit();
  }
}
