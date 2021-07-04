import { NgModule } from '@angular/core';
import { CellsViewComponent } from './cells-view/cells-view.component';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesListComponent } from './tables-list-view/tables-list-view.component';


const routes: Routes = [
  { path: '',   component: DataTablesListComponent },
  { path: 'cells', component: CellsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
