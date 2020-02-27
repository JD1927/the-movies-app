import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMoviesComponent } from './latest-movies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from 'src/app/services/movie.service';
import { of, throwError } from 'rxjs';
import { movieMock } from 'src/app/shared/mocks/movie.mock';

describe('LatestMoviesComponent', () => {
  let component: LatestMoviesComponent;
  let fixture: ComponentFixture<LatestMoviesComponent>;
  let movie: MovieService;

  // Spy
  let getLatestMoviesSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ LatestMoviesComponent ],
      providers: [MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMoviesComponent);
    component = fixture.componentInstance;

    movie = TestBed.get(MovieService);
  });

  describe('#ngOnInit()', () => {
    it('Should call all of the methods inside', () => {
      // Arrange
      getLatestMoviesSpy = spyOn(component, 'getLatestMovies');
      // Act
      component.ngOnInit();
      // Assert
      expect(getLatestMoviesSpy).toHaveBeenCalled();
    });
  });

  describe('#getLatestMovies()', () => {
    it('Should get all of the Latest Movies', () => {
      // Arrange
      const response = [{ ...movieMock }];
      getLatestMoviesSpy = spyOn(movie, 'getLatestMovies').and.returnValue(of(response));
      // Act
      component.getLatestMovies();
      // Assert
      expect(getLatestMoviesSpy).toHaveBeenCalled();
      expect(component.latestMovies).toEqual(response);
    });
    it('Should not get all of the Latest Movies when it gets an error', () => {
      // Arrange
      const response = { error: { message: 'Error' } };
      getLatestMoviesSpy = spyOn(movie, 'getLatestMovies').and.returnValue(throwError(response));
      // Act
      component.getLatestMovies();
      // Assert
      expect(getLatestMoviesSpy).toHaveBeenCalled();
    });
  });


});
