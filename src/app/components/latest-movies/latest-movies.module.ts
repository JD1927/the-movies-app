import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestMoviesRoutingModule } from './latest-movies-routing.module';
import { LatestMoviesComponent } from './latest-movies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LatestMoviesComponent],
  imports: [
    CommonModule,
    LatestMoviesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [MovieService]
})
export class LatestMoviesModule { }
