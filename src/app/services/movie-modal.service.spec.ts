import { TestBed } from '@angular/core/testing';

import { MovieModalService } from './movie-modal.service';

describe('MovieModalService', () => {
  let service: MovieModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
