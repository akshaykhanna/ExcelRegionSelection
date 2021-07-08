import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpService } from './http.service';
import { httpServiceStub } from './stubs';
import { of } from 'rxjs';

describe('DataService', () => {
  let service: DataService;
  let httpService: HttpService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpService, useValue: httpServiceStub }],
    });
    service = TestBed.get(DataService);
    httpService = TestBed.get(HttpService);
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getDataTables should make graphQLRequest ', async () => {
    const httpGQLSpy = spyOn(httpService, 'graphQLRequest').and.returnValue(of([]));
    await service.getDataTables();
    expect(httpGQLSpy).toHaveBeenCalled();
  });
});
