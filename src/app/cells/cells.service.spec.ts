import { TestBed } from '@angular/core/testing';

import { CellsService } from './cells.service';
import { HttpService } from '../http.service';
import { httpServiceStub } from '../stubs';

describe('CellsService', () => {
  beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [{ provide: HttpService, useValue: httpServiceStub }],
  })
);


  it('should be created', () => {
    const service: CellsService = TestBed.get(CellsService);
    expect(service).toBeTruthy();
  });
});
