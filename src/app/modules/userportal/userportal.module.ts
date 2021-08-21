import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { UserportalRoutingModule } from './userportal-routing.module';
import { UserButtonComponent } from './user-button/user-button.component';
import { CommentComponent } from './comment/comment.component';
import { PortalComponent } from './portal/portal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostComponent,
    UserButtonComponent,
    CommentComponent,
    PortalComponent
  ],
  imports: [CommonModule, UserportalRoutingModule, SharedModule]
})
export class UserportalModule {}
