import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MovieModalService } from '../services/movie-modal.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [MovieCardComponent, MovieModalComponent, SafePipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule,
    MatChipsModule
  ],
  exports: [
    MovieCardComponent, MovieModalComponent, SafePipe
  ],
  providers: [
    MovieModalService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class SharedModule { }
