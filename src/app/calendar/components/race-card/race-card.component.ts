import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/shared/models/race.model';

@Component({
  selector: 'app-calendar-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.css'],
})
export class CalendarRaceCardComponent implements OnInit {
  @Input() race!: Race;

  constructor() {}

  ngOnInit(): void {}

  get raceTime() {
    return `${this.race.date}T${this.race.time}`;
  }
}
