import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/models/posts';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {
  private ngUnsubscribe$ = new Subject();
  @Input()
  userId!: number;
  posts: Post[] | undefined;
  firstThreePosts: Post[] | undefined;
  extendedPosts: Post[] | undefined;

  constructor(private httpService: HttpService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngOnChanges(): void {
    console.log('user id is changed');
    this.httpService
      .getUserPostService(this.userId)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        (res) => {
          console.log(res);
          this.posts = res;
          this.firstThreePosts = this.posts.filter((e, i) => i <= 2);
          this.extendedPosts = this.posts.filter((e, i) => i > 2);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
        }
      );
  }
}
