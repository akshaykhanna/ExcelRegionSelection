import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesListComponent } from './data-tables-list.component';

describe('DataTablesListComponent', () => {
  let component: DataTablesListComponent;
  let fixture: ComponentFixture<DataTablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
