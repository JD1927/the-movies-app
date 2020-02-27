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
import { MovieSellerComponent } from './components/movie-seller/movie-seller.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieModalComponent,
    SafePipe,
    MovieSellerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    MovieCardComponent,
    MovieModalComponent,
    SafePipe,
    MovieSellerComponent
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
