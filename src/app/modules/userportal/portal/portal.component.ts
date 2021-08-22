import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getAllUsersService()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        (res: User[]) => {
          console.log(res);
          this.allUsers = res;
        },
        (error: HttpErrorResponse) => {
          console.error(error);
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
