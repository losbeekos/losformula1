import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { DriverStandings } from '@shared/models/driver.model';
import { ConstructorStandings } from '@shared/models/constructor.model';
import { BaseHttpService } from '@shared/services/base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class StandingsService extends BaseHttpService {
  private drivers$!: Observable<DriverStandings>;
  private constructors$!: Observable<ConstructorStandings>;

  drivers(season: string = 'current'): Observable<DriverStandings> {
    if (!this.drivers$) {
      this.drivers$ = this.get<DriverStandings>(
        `${season}/driverstandings`
      ).pipe(shareReplay(1));
    }
    return this.drivers$;
  }

  constructors(season: string = 'current'): Observable<ConstructorStandings> {
    if (!this.constructors$) {
      this.constructors$ = this.get<ConstructorStandings>(
        `${season}/constructorstandings`
      ).pipe(shareReplay(1));
    }
    return this.constructors$;
  }
}
