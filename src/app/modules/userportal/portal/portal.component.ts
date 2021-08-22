import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject();
  allUsers: User[] = [];
  selectedUserId!: number;
  selectedusername: string | undefined;

  // Those flags indicate the status of HTTP Get request
  isLoadingUsers = true;
  isLoadedUsers = false;
  isError = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getAllUsersService()
      .pipe(delay(500))
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        (res: User[]) => {
          console.log(res);
          this.allUsers = res;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (error: HttpErrorResponse) => {
          this.isError = true;
          this.isLoadingUsers = false;
        },
        () => {
          this.isLoadedUsers = true;
          this.isLoadingUsers = false;
        }
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  bindSelectedUserId(bindedId: number): void {
    this.selectedUserId = bindedId;
    this.selectedusername = this.allUsers[bindedId - 1].name;
  }
}
