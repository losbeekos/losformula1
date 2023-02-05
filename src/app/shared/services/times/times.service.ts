import { Injectable } from '@angular/core';
import { RaceTime } from '../../models/race.model';

@Injectable({
  providedIn: 'root',
})
export class TimesService {
  raceTime(date: RaceTime['date'], time: RaceTime['time']) {
    return `${date}T${time}`;
  }
}
