import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-list-view',
  templateUrl: './tables-list-view.component.html',
  styleUrls: ['./tables-list-view.component.css']
})
export class DataTablesListComponent implements OnInit {
  dataTablesString = [
    'Data table 1',
    'Data table 2',
    'Data table 3',
 ]
  constructor() { }

  ngOnInit() {
  }

}
