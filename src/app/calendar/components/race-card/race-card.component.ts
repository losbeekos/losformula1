import { Component, Input } from '@angular/core';
import { Race } from '@shared/models/race.model';

@Component({
  selector: 'app-calendar-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.css'],
})
export class CalendarRaceCardComponent {
  @Input() race!: Race;

  get raceTime() {
    return `${this.race.date}T${this.race.time}`;
  }
}
