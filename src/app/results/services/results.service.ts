import { Observable, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseHttpService } from '@shared/services/base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ResultsService extends BaseHttpService {
  private results$!: Observable<any>;

  current(): Observable<any> {
    if (!this.results$) {
      this.results$ = this.get<any>('2023/results', { limit: '1000' }).pipe(
        shareReplay(1)
      ); // @losbeekos TODO TYPE
    }
    return this.results$;
  }
}
