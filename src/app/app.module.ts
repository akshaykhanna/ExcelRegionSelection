import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesListComponent } from './tables-list-view/tables-list-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CellsViewComponent } from './cells-view/cells-view.component';
import { SelectionViewComponent } from './selection-view/selection-view.component';
import { MarkedCellsViewComponent } from './marked-cells-view/marked-cells-view.component';
import { CellsGridComponent } from './cells-grid/cells-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTablesListComponent,
    NavbarComponent,
    CellsViewComponent,
    SelectionViewComponent,
    MarkedCellsViewComponent,
    CellsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
