import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverStandings } from '@shared/models/driver.model';
import { ConstructorStandings } from '@shared/models/constructor.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  constructor(private http: HttpClient) {}

  drivers(): Observable<DriverStandings> {
    return this.http.get<DriverStandings>(
      `${environment.API_URL}/current/driverstandings.json`
    );
  }

  constructors(): Observable<ConstructorStandings> {
    return this.http.get<ConstructorStandings>(
      `${environment.API_URL}/current/constructorstandings.json`
    );
  }
}
