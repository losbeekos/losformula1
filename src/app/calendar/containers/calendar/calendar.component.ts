import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Race, RaceTable } from '@shared/models/race.model';
import { Schedule } from '@shared/models/schedule.model';
import { DatesService } from '@shared/services/dates/dates.service';
import { ScheduleService } from '@app/calendar/shared/services/schedule.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  subscription!: Subscription;
  schedule!: RaceTable;
  comingRaces: Race[] = [];
  pastRaces: Race[] = [];
  error: String | null = null;

  constructor(
    private scheduleService: ScheduleService,
    private datesService: DatesService
  ) {}

  ngOnInit(): void {
    this.subscription = this.scheduleService
      .current()
      .pipe(
        map((schedule: Schedule) => {
          const raceTable = schedule.MRData.RaceTable;
          const races = raceTable.Races;

          this.comingRaces = races.filter((race: Race) =>
            this.datesService.inFuture(`${race.date}T${race.time}`)
          );

          this.pastRaces = races.filter((race: Race) =>
            this.datesService.inPast(`${race.date}T${race.time}`)
          );

          return raceTable;
        })
      )
      .subscribe({
        next: (raceTable: RaceTable) => {
          this.schedule = raceTable;
        },
        error: (error) => (this.error = error.message),
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
