import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/shared/models/race.model';

@Component({
  selector: 'app-calendar-race-sessions',
  templateUrl: './race-sessions.component.html',
  styleUrls: ['./race-sessions.component.css'],
})
export class CalendarRaceSessionsComponent implements OnInit {
  @Input() race!: Race;

  constructor() {}

  ngOnInit(): void {}

  formatRaceTime(date: Date, time: string) {
    return `${date}T${time}`;
  }
}
