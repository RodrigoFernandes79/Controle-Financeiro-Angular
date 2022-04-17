import { TestBed } from '@angular/core/testing';

import { ResumoMesService } from './resumo-mes.service';

describe('ResumoMesService', () => {
  let service: ResumoMesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumoMesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
