import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marked-cells-view',
  templateUrl: './marked-cells-view.component.html',
  styleUrls: ['./marked-cells-view.component.css'],
})
export class MarkedCellsViewComponent implements OnInit {
  // @Input() markedCells = [];
  @Input() markedCells = ['E1', 'E2', 'E3'];
  constructor() {}

  ngOnInit() {}
}
