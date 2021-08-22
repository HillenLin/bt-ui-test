import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
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
  posts: Post[] = [];
  displayedPosts: Post[] = [];
  selectedPostId!: number;

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
          this.displayedPosts = this.posts.filter((e, i) => i <= 2);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
        }
      );
  }

  loadAllPosts(): void {
    console.log(this.posts);
    this.displayedPosts = this.posts;
  }

  bindSelectedPostId(bindedId: number): void {
    this.selectedPostId = bindedId;
  }
}
