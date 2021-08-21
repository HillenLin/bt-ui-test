import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { UserportalRoutingModule } from './userportal-routing.module';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, UserportalRoutingModule]
})
export class UserportalModule {}
