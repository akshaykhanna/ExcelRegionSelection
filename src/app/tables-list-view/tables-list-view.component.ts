import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataService } from '../data.service';
import DataTable from '../models/data-table';

@Component({
  selector: 'app-tables-list-view',
  templateUrl: './tables-list-view.component.html',
  styleUrls: ['./tables-list-view.component.css'],
})
export class DataTablesListComponent implements OnInit {
  dataTablesString = ['Data table 1', 'Data table 2', 'Data table 3'];
  seletedTable: string;
  dataTables: DataTable[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDataTables().subscribe((dataTables: DataTable[]) => {
      console.log('ak dataTables: ', dataTables);
      this.dataTables = dataTables;
    });
  }
  onTableSelect(tableName) {
    this.seletedTable = tableName;
  }
  isTableSelected(tableName) {
    return this.seletedTable === tableName;
  }
}
