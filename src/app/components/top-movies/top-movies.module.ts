import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMoviesComponent } from './top-movies.component';
import { TopMoviesRoutingModule } from './top-movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';
import { MovieModalComponent } from 'src/app/shared/components/movie-modal/movie-modal.component';



@NgModule({
  declarations: [TopMoviesComponent],
  imports: [
    CommonModule,
    TopMoviesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [MovieService],
  entryComponents: [MovieModalComponent]
})
export class TopMoviesModule { }
