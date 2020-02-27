import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieModalComponent } from '../shared/components/movie-modal/movie-modal.component';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieModalService {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<any, any>
  ) { }

  openCardDetail(movie: Movie): void {
    this.dialog.open(MovieModalComponent, {
      panelClass: 'movie-modal',
      data: { ...movie }
    });
  }
}
