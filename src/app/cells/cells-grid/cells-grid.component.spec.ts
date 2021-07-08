import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsGridComponent } from './cells-grid.component';
import { CellsService } from '../cells.service';

describe('CellsGridComponent', () => {
  let component: CellsGridComponent;
  let fixture: ComponentFixture<CellsGridComponent>;
  const cellsServiceStub: Partial<CellsService> = {
    colName: () => {
      return 'A1';
    },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellsGridComponent ],
      providers: [
        { provide: CellsService, useValue: cellsServiceStub },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
