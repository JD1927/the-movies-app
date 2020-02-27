import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviesComponent } from './top-movies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from 'src/app/services/movie.service';
import { movieMock } from 'src/app/shared/mocks/movie.mock';
import { of, throwError } from 'rxjs';

describe('TopMoviesComponent', () => {
  let component: TopMoviesComponent;
  let fixture: ComponentFixture<TopMoviesComponent>;
  let movie: MovieService;

  // Spy
  let getTopMoviesSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ TopMoviesComponent ],
      providers: [
        MovieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoviesComponent);
    component = fixture.componentInstance;

    movie = TestBed.get(MovieService);
  });

  describe('#ngOnInit()', () => {
    it('Should call all of the methods inside', () => {
      // Arrange
      getTopMoviesSpy = spyOn(component, 'getTopMovies');
      // Act
      component.ngOnInit();
      // Assert
      expect(getTopMoviesSpy).toHaveBeenCalled();
    });
  });

  describe('#getTopMovies()', () => {
    it('Should get all of the Top 10 Rated Movies', () => {
      // Arrange
      const response = [{ ...movieMock }];
      getTopMoviesSpy = spyOn(movie, 'getTopMovies').and.returnValue(of(response));
      // Act
      component.getTopMovies();
      // Assert
      expect(getTopMoviesSpy).toHaveBeenCalled();
      expect(component.movies).toEqual(response);
    });
    it('Should not get all of the Top 10 Rated Movies when it gets an error', () => {
      // Arrange
      const response = { error: { message: 'Error' } };
      getTopMoviesSpy = spyOn(movie, 'getTopMovies').and.returnValue(throwError(response));
      // Act
      component.getTopMovies();
      // Assert
      expect(getTopMoviesSpy).toHaveBeenCalled();
    });
  });
});
