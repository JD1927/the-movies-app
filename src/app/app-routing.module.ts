import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';


const routes: Routes = [
  {
    path: 'home',
    component: MainContentComponent
  },
  {
    path: 'top-movies',
    loadChildren: () => import('./components/top-movies/top-movies.module').then(m => m.TopMoviesModule)
  },
  {
    path: 'latest-movies',
    loadChildren: () => import('./components/latest-movies/latest-movies.module').then(m => m.LatestMoviesModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
