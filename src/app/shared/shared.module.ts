import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MovieCardComponent } from './components/movie-card/movie-card.component';


@NgModule({
  declarations: [MovieCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class SharedModule { }
