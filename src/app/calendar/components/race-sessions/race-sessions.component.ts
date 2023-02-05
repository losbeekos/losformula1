import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Race } from '@shared/models/race.model';
import { TimesService } from '@shared/services/times/times.service';

@Component({
  standalone: true,
  selector: 'app-calendar-race-sessions',
  imports: [CommonModule, DatePipe],
  templateUrl: './race-sessions.component.html',
  styleUrls: ['./race-sessions.component.css'],
})
export class CalendarRaceSessionsComponent {
  readonly timesService = inject(TimesService);

  @Input() race!: Race;
}
