import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkedCellsViewComponent } from './marked-cells-view.component';
import Cell from '../../models/cell';
import { CellStatus } from 'src/app/models/cell';

describe('MarkedCellsViewComponent', () => {
  let component: MarkedCellsViewComponent;
  let fixture: ComponentFixture<MarkedCellsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkedCellsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkedCellsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.markedCells.length).toBe(0);
  });

  it('should unMarkCell', () => {
    const cell = new Cell('A', 1, 'Test', CellStatus.MARKED);
    expect(cell.status).toBe(CellStatus.MARKED);
    component.unMarkCell(cell)
    expect(cell.status).toBe(CellStatus.NORMAL);
  });

});
