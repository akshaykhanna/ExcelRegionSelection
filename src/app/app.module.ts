import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesListComponent } from './tables-list-view/tables-list-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CellsModule } from './cells/cells.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DataTablesListComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CellsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
