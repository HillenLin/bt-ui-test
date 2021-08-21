import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FirstNamePipe } from '../../pipes/first-name.pipe';

@NgModule({
  declarations: [FirstNamePipe],
  imports: [CommonModule, MatButtonModule],
  exports: [MatButtonModule, FirstNamePipe]
})
export class SharedModule {}
