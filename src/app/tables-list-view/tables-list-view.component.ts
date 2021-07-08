import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import DataTable, {
  DataTableWithVersion,
} from '../models/data-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables-list-view',
  templateUrl: './tables-list-view.component.html',
  styleUrls: ['./tables-list-view.component.css'],
})
export class DataTablesListComponent implements OnInit {
  seletedTable: DataTableWithVersion;
  dataTablesWithVersion: DataTableWithVersion[] = [];
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDataTables().subscribe((dataTables: DataTable[]) => {
      this.dataTablesWithVersion = this.createDataTableWithVersion(dataTables);
    });
  }
  createDataTableWithVersion(tables: DataTable[]): DataTableWithVersion[] {
    const tablesWithVersion: DataTableWithVersion[] = [];
    for (const table of tables) {
      for (const version of table.versions) {
        tablesWithVersion.push({
          id: table.id,
          title: table.title,
          versionNo: version.versionNumber,
        });
      }
    }
    return tablesWithVersion;
  }
  onTableSelect(dataTableWithVer: DataTableWithVersion) {
    this.seletedTable = dataTableWithVer;
  }
  isTableSelected(dataTableWithVer: DataTableWithVersion) {
    return this.seletedTable === dataTableWithVer;
  }
  navigateToCells(dataTableWithVer: DataTableWithVersion) {
    this.router.navigate([
      '/cells',
      dataTableWithVer.id,
      dataTableWithVer.versionNo,
    ]);
  }
}
