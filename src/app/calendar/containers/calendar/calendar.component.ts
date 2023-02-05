import { Component, inject, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Race, RaceTable } from '@shared/models/race.model';
import { Schedule } from '@shared/models/schedule.model';
import { DatesService } from '@shared/services/dates/dates.service';
import { TimesService } from '@shared/services/times/times.service';
import { ScheduleService } from '@app/calendar/shared/services/schedule.service';

interface CustomSchedule {
  season: RaceTable['season'];
  comingRaces: Race[];
  pastRaces: Race[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  private timesService = inject(TimesService);
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
