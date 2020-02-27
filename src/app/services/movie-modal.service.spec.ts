import { TestBed } from '@angular/core/testing';

import { MovieModalService } from './movie-modal.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { movieMock } from './../shared/mocks/movie.mock';

describe('MovieModalService', () => {
  let service: MovieModalService;

  // Spy
  let openDialogSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    });
    service = TestBed.inject(MovieModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#openCardDetail()', () => {
    it('Should open a movie card detail when it is called', () => {
      // Arrange
      openDialogSpy = spyOn(service.dialog, 'open');
      // Act
      service.openCardDetail({ ...movieMock });
      // Assert
      expect(openDialogSpy).toHaveBeenCalled();
    });
  });

});
