import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpService } from './http.service';
import { httpServiceStub } from './stubs';

describe('DataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: HttpService, useValue: httpServiceStub }],
    })
  );

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
