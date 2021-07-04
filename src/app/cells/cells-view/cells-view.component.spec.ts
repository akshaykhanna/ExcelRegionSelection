import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsViewComponent } from './cells-view.component';

describe('CellsViewComponent', () => {
  let component: CellsViewComponent;
  let fixture: ComponentFixture<CellsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellsViewComponent ]
    })
    .compileComponents();
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
