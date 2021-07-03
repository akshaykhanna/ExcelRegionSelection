import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkedCellsViewComponent } from './marked-cells-view.component';

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
  });
});
