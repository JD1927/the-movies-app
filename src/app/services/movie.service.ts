import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopMovies(): Observable<any> {
    return this.http.get('../../assets/json/top-movies.json');
  }

  getLatestMovies(): Observable<any> {
    return this.http.get('../../assets/json/movies-coming-soon.json');
  }
}
