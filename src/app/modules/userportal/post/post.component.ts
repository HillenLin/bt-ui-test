import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
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

  // Those flags indicate the status of HTTP Get request
  isLoadingPosts = true;
  isLoadedPosts = false;
  isError = false;

  constructor(private httpService: HttpService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngOnChanges(): void {
    this.isLoadingPosts = true;
    this.isError = false;
    this.isLoadedPosts = false;

    this.httpService
      .getUserPostService(this.userId)
      .pipe(delay(500))
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        (res) => {
          this.posts = res;
          this.displayedPosts = this.posts.filter((e, i) => i <= 2);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          this.isError = true;
          this.isLoadingPosts = false;
        },
        () => {
          this.isLoadedPosts = true;
          this.isLoadingPosts = false;
        }
      );
  }

  loadAllPosts(): void {
    this.displayedPosts = this.posts;
  }

  bindSelectedPostId(bindedId: number): void {
    this.selectedPostId = bindedId;
  }
}
