import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestMoviesComponent } from './latest-movies.component';


const routes: Routes = [
  {
    path: '',
    component: LatestMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestMoviesRoutingModule { }
