import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { movieMock } from '../shared/mocks/movie.mock';
import { MovieService } from './movie.service';


describe('MovieService', () => {
  let service: MovieService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MovieService);
    // Inject service's dependencies
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    service = undefined;
    http = undefined;
  });

  describe('#getTopMovies()', () => {
    let body, errorStub, request, opts;
    const url = `../../assets/json/top-movies.json`;

    beforeEach(() => {
      // ARRANGE
      body = [{ ...movieMock }];

      // Set error response
      errorStub = {
        Message: 'The request had an error.'
      };

      // Set request data
      request = {
        url,
        method: 'GET'
      }
    });
    it('Should get the Top 10 Movies', async(() => {
      // ACT
      service.getTopMovies()
        .subscribe((res) => {
          // ASSERT
          expect(res).toEqual(body);
          expect(res).toEqual(jasmine.any(Array));
        });
      // Set response options
      opts = {
        status: 200,
        statusText: 'Ok'
      }
      // Request handler
      http
        .expectOne(request)
        .flush(body, opts);

    }));
    it('Should return status 400 when the request has a problem', async(() => {
      // ACT
      service.getTopMovies()
        .subscribe(() => { },
          (error) => {
            // ASSERT
            expect(error.status).toEqual(opts.status);
            expect(error.url).toEqual(url);
            expect(error.ok).toBeFalsy();
            expect(error.error.Message).toEqual(jasmine.any(String));
            expect(error).toEqual(jasmine.any(HttpErrorResponse));
          });

      // Set response options
      opts = {
        status: 400,
        statusText: errorStub.Message
      }

      // Request handler
      http
        .expectOne(request)
        .flush(errorStub, opts);

    }));

  });

  describe('#getLatestMovies()', () => {
    let body, errorStub, request, opts;
    const url = `../../assets/json/movies-coming-soon.json`;

    beforeEach(() => {
      // ARRANGE
      body = [{ ...movieMock }];

      // Set error response
      errorStub = {
        Message: 'The request had an error.'
      };

      // Set request data
      request = {
        url,
        method: 'GET'
      }
    });
    it('Should get the Latest Movies', async(() => {
      // ACT
      service.getLatestMovies()
        .subscribe((res) => {
          // ASSERT
          expect(res).toEqual(body);
          expect(res).toEqual(jasmine.any(Array));
        });
      // Set response options
      opts = {
        status: 200,
        statusText: 'Ok'
      }
      // Request handler
      http
        .expectOne(request)
        .flush(body, opts);

    }));
    it('Should return status 400 when the request has a problem', async(() => {
      // ACT
      service.getLatestMovies()
        .subscribe(() => { },
          (error) => {
            // ASSERT
            expect(error.status).toEqual(opts.status);
            expect(error.url).toEqual(url);
            expect(error.ok).toBeFalsy();
            expect(error.error.Message).toEqual(jasmine.any(String));
            expect(error).toEqual(jasmine.any(HttpErrorResponse));
          });

      // Set response options
      opts = {
        status: 400,
        statusText: errorStub.Message
      }

      // Request handler
      http
        .expectOne(request)
        .flush(errorStub, opts);

    }));

  });

});
