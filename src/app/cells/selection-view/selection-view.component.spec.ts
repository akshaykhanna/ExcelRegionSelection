import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionViewComponent } from './selection-view.component';
import Cell from '../../models/cell';
import { CellStatus } from 'src/app/models/cell';

describe('SelectionViewComponent', () => {
  let component: SelectionViewComponent;
  let fixture: ComponentFixture<SelectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isCellSelected).toBeFalsy();
  });

  it('should mark cell', () => {
    const selectedCell = new Cell('A', 1, 'Test', CellStatus.NORMAL);
    component.selectedCell = selectedCell;
    expect(component.selectedCell.status).toBe(CellStatus.NORMAL);
    component.onMarkCell();
    expect(component.selectedCell.status).toBe(CellStatus.MARKED);

  });
});
