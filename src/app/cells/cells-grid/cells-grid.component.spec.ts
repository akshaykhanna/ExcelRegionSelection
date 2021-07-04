import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsGridComponent } from './cells-grid.component';

describe('CellsGridComponent', () => {
  let component: CellsGridComponent;
  let fixture: ComponentFixture<CellsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellsGridComponent ]
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
