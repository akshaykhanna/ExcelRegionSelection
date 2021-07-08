import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import DataTable from '../models/data-table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tables-list-view',
  templateUrl: './tables-list-view.component.html',
  styleUrls: ['./tables-list-view.component.css'],
})
export class DataTablesListComponent implements OnInit {
  seletedTableTitle: string;
  dataTables: DataTable[] = [];
  constructor(private router: Router, private dataService: DataService, ) {}

  ngOnInit() {
    this.dataTables = [];
    this.dataService.getDataTables().subscribe((dataTables: DataTable[]) => {
      console.log('ak dataTables: ', dataTables);
      this.dataTables = dataTables;
    });
  }
  onTableSelect(dataTableTitle: string) {
    this.seletedTableTitle = dataTableTitle;
  }
  isTableSelected(dataTableTitle: string) {
    return this.seletedTableTitle === dataTableTitle;
  }
  navigateToCells(id: string) {
    this.router.navigate(['/cells', id]);
  }

}
