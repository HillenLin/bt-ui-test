import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FirstNamePipe } from '../../pipes/first-name.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [FirstNamePipe, TopNavComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FirstNamePipe,
    TopNavComponent
  ]
})
export class SharedModule {}
