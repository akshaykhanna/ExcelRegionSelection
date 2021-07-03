import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesListComponent } from './data-tables-list/data-tables-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CellsViewComponent } from './cells-view/cells-view.component';
import { SelectionViewComponent } from './selection-view/selection-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTablesListComponent,
    NavbarComponent,
    CellsViewComponent,
    SelectionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
