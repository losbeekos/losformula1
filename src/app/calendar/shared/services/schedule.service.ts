import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Schedule } from '@shared/models/schedule.model';
import { BaseHttpService } from '@src/app/shared/services/base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService extends BaseHttpService {
  private schedule$!: Observable<Schedule>;

  current(): Observable<Schedule> {
    if (!this.schedule$) {
      this.schedule$ = this.get<Schedule>('current').pipe(shareReplay(1));
    }
    return this.schedule$;
  }
}
