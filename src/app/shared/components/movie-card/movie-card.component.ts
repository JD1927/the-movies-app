import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieModalService } from 'src/app/services/movie-modal.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: Movie;

  constructor(
    private modal: MovieModalService
  ) { }

  onCardDetail(): void {
    this.modal.openCardDetail(this.movie);
  }



}
