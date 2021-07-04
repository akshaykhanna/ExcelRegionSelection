import { TestBed } from '@angular/core/testing';

import { CellsService } from './cells.service';

describe('CellsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CellsService = TestBed.get(CellsService);
    expect(service).toBeTruthy();
  });
});
