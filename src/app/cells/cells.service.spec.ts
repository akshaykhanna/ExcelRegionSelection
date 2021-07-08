import { TestBed } from '@angular/core/testing';

import { CellsService } from './cells.service';
import { HttpService } from '../http.service';
import { httpServiceStub } from '../stubs';
import { Row } from '../models/data-table';
import { of } from 'rxjs';

describe('CellsService', () => {
  let service: CellsService;
  let httpService: HttpService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpService, useValue: httpServiceStub }],
    });
    service = TestBed.get(CellsService);
    httpService = TestBed.get(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get sheet style colName on passing colNo.', () => {
    expect(service.colName(0)).toBe('A');
    expect(service.colName(25)).toBe('Z');
    expect(service.colName(26)).toBe('AA');
    expect(service.colName(51)).toBe('AZ');
  });

  it('should create getGridCells from rowOfCells', () => {
    const rowOfCells: Row[] = [
      { columnData: [1, 2, 3] },
      { columnData: [4, 5, 6] },
    ];
    const cells = service.getGridCells(rowOfCells);
    expect(cells.length).toBe(2);
    expect(cells[0].length).toBe(3);
  });

  it('getCellsData should make graphQLRequest ', async() => {
    const mockObservable = of([]);
    const httpGQLSpy = spyOn(httpService, 'graphQLRequest').and.returnValue(mockObservable);
    await service.getCellsData('1', 2);
    expect(httpGQLSpy).toHaveBeenCalled();
  });

});
