import { map, Observable } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Race, RaceTable } from '@shared/models/race.model';
import { Schedule } from '@shared/models/schedule.model';
import { DatesService } from '@shared/services/dates/dates.service';
import { TimesService } from '@shared/services/times/times.service';
import { ScheduleService } from '@app/calendar/shared/services/schedule.service';
import { CalendarRaceCardComponent } from '@app/calendar/components/race-card/race-card.component';

interface CustomSchedule {
  season: RaceTable['season'];
  comingRaces: Race[];
  pastRaces: Race[];
}

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [CommonModule, CalendarRaceCardComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  readonly timesService = inject(TimesService);
  readonly scheduleService = inject(ScheduleService);
  readonly datesService = inject(DatesService);

  schedule$!: Observable<CustomSchedule>;

  ngOnInit(): void {
    this.schedule$ = this.scheduleService.current().pipe(
      map((schedule: Schedule) => schedule.MRData.RaceTable), // 🤢
      map((raceTable: RaceTable) => {
        const races = raceTable.Races;
        return {
          season: raceTable.season,
          comingRaces: races.filter((race: Race) =>
            this.datesService.inFuture(
              this.timesService.raceTime(race.date, race.time)
            )
          ),
          pastRaces: races.filter((race: Race) =>
            this.datesService.inPast(
              this.timesService.raceTime(race.date, race.time)
            )
          ),
        };
      })
    );
  }
}
