import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FirstNamePipe } from '../../pipes/first-name.pipe';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [FirstNamePipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FirstNamePipe
  ]
})
export class SharedModule {}
