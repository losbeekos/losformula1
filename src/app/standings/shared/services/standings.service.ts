import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverStandings } from 'src/app/shared/models/driver.model';
import { ConstructorStandings } from 'src/app/shared/models/constructor.model';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  constructor(private http: HttpClient) {}

  drivers(): Observable<DriverStandings> {
    return this.http.get<DriverStandings>(
      'https://ergast.com/api/f1/current/driverstandings.json'
    );
  }

  constructors(): Observable<ConstructorStandings> {
    return this.http.get<ConstructorStandings>(
      'https://ergast.com/api/f1/current/constructorstandings.json'
    );
  }
}
