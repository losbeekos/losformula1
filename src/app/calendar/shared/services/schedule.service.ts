import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '@shared/models/schedule.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  current(): Observable<Schedule> {
    return this.http.get<Schedule>(`${environment.API_URL}/current.json`);
  }
}
