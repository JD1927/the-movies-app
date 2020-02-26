import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {

  latestMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getLatestMovies();
  }

  getLatestMovies(): void {
    this.movieService.getLatestMovies().subscribe(
      (res) => this.latestMovies = res,
      (err) => console.log(err)
    );
  }

}
