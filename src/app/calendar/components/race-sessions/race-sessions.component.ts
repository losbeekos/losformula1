import { Component, Input } from '@angular/core';
import { Race } from '@shared/models/race.model';

@Component({
  selector: 'app-calendar-race-sessions',
  templateUrl: './race-sessions.component.html',
  styleUrls: ['./race-sessions.component.css'],
})
export class CalendarRaceSessionsComponent {
  @Input() race!: Race;

  formatRaceTime(date: string, time: string) {
    return `${date}T${time}`;
  }
}
