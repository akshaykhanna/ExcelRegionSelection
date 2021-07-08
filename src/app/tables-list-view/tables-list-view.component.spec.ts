import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesListComponent } from './tables-list-view.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

describe('DataTablesListComponent', () => {
  let component: DataTablesListComponent;
  let fixture: ComponentFixture<DataTablesListComponent>;
  const routerStub: Partial<Router> = {
    navigate: () => {
      return new Promise<boolean>(null);
    },
  };
  const dataServiceStub: Partial<DataService> = {
    getDataTables: () => {
      return new Observable();
    },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataTablesListComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: DataService, useValue: dataServiceStub },
      ],
    }).compileComponents();
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
