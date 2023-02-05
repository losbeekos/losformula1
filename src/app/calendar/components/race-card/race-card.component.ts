import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Race } from '@shared/models/race.model';
import { CountryEmojiComponent } from '@shared/components/country-emoji/country-emoji.component';
import { CalendarRaceSessionsComponent } from '../race-sessions/race-sessions.component';

@Component({
  standalone: true,
  selector: 'app-calendar-race-card',
  imports: [CommonModule, CountryEmojiComponent, CalendarRaceSessionsComponent],
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.css'],
})
export class CalendarRaceCardComponent {
  @Input() race!: Race;
}
