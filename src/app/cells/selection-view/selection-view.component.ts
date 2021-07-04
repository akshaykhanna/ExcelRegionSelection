import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-selection-view',
  templateUrl: './selection-view.component.html',
  styleUrls: ['./selection-view.component.css'],
})
export class SelectionViewComponent implements OnInit, OnChanges {
  @Input() selectedCellId = '';
  isCellSelected: boolean;
  constructor() {}

  ngOnInit() {
    this.isCellSelected = this.selectedCellId
      ? this.selectedCellId !== ''
      : false;
  }

  ngOnChanges(): void {
    this.isCellSelected = this.selectedCellId
      ? this.selectedCellId !== ''
      : false;
  }
}
