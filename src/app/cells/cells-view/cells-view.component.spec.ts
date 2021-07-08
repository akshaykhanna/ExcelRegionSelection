import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsViewComponent } from './cells-view.component';
import { CellsGridComponent } from '../cells-grid/cells-grid.component';
import { SelectionViewComponent } from '../selection-view/selection-view.component';
import { MarkedCellsViewComponent } from '../marked-cells-view/marked-cells-view.component';
import { CellsService } from '../cells.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable } from 'rxjs';

describe('CellsViewComponent', () => {
  let component: CellsViewComponent;
  let fixture: ComponentFixture<CellsViewComponent>;
  const cellsServiceStub: Partial<CellsService> = {
    getCellsData: () => new Observable(),
    colName: () => {
      return 'A1';
    },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CellsViewComponent,
        CellsGridComponent,
        SelectionViewComponent,
        MarkedCellsViewComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ uuid: 'dummy' }) },
          },
        },
        { provide: CellsService, useValue: cellsServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
