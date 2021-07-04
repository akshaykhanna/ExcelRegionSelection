import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesListComponent } from './tables-list-view/tables-list-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CellsViewComponent } from './cells/cells-view/cells-view.component';
import { SelectionViewComponent } from './cells/selection-view/selection-view.component';
import { MarkedCellsViewComponent } from './cells/marked-cells-view/marked-cells-view.component';
import { CellsGridComponent } from './cells/cells-grid/cells-grid.component';
import { CellsModule } from './cells/cells.module';

@NgModule({
  declarations: [
    AppComponent,
    DataTablesListComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CellsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
