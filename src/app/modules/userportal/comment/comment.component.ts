import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  constructor(private httpService: HttpService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngOnChanges(): void {
    console.log(`post id is changed ${this.postId} `);
    this.httpService
      .getCommentService(this.postId)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        (res) => {
          console.log(res);
          this.allComments = res;
        },
        (error: HttpErrorResponse) => {
          console.error(error);
        }
      );
  }
}
