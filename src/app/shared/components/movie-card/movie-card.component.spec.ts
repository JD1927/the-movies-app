import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { movieMock } from '../../mocks/movie.mock';
import { MovieModalService } from 'src/app/services/movie-modal.service';
import { MatCardModule } from '@angular/material/card';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let modal: MovieModalService;

  // Spy
  let openCardDetailSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule
      ],
      declarations: [MovieCardComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = { ...movieMock };

    modal = TestBed.get(MovieModalService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onCardDetail()', () => {
    it('Should open a movie card detail', () => {
      // Arrange
      openCardDetailSpy = spyOn(modal, 'openCardDetail');
      // Act
      component.onCardDetail();
      // Assert
      expect(openCardDetailSpy).toHaveBeenCalled();
      expect(openCardDetailSpy).toHaveBeenCalledWith(component.movie);
    });

  });
});
