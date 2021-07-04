import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selection-view',
  templateUrl: './selection-view.component.html',
  styleUrls: ['./selection-view.component.css']
})
export class SelectionViewComponent implements OnInit {
  @Input() selectedCell = '';
  isCellSelected: boolean;
  constructor() { }

  ngOnInit() {
    this.isCellSelected = this.selectedCell !== '';
  }

}
