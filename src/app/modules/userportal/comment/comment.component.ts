import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnChanges, OnDestroy {
  private ngUnsubscribe$ = new Subject();
  @Input()
  postId!: number;
  allComments: Comment[] | undefined;

  // Those flags indicate the status of HTTP Get request
  isLoadingComments = true;
  isLoadedComments = false;
  isError = false;

  constructor(private httpService: HttpService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngOnChanges(): void {
    this.isError = false;
    this.isLoadingComments = true;
    this.isLoadedComments = false;
    this.httpService
      .getCommentService(this.postId)
      .pipe(delay(500))
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        (res) => {
          this.allComments = res;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (error: HttpErrorResponse) => {
          this.isError = true;
          this.isLoadingComments = false;
        },
        () => {
          this.isLoadedComments = true;
          this.isLoadingComments = false;
        }
      );
  }
}
