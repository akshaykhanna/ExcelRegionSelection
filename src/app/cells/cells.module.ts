import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellsViewComponent } from './cells-view/cells-view.component';
import { SelectionViewComponent } from './selection-view/selection-view.component';
import { MarkedCellsViewComponent } from './marked-cells-view/marked-cells-view.component';
import { CellsGridComponent } from './cells-grid/cells-grid.component';
import { CellsService } from './cells.service';

@NgModule({
  declarations: [
    CellsViewComponent,
    SelectionViewComponent,
    MarkedCellsViewComponent,
    CellsGridComponent,
  ],
  imports: [CommonModule],
  providers: [CellsService],
})
export class CellsModule {}
