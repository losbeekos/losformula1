import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DriverStandingsList } from '@shared/models/driver.model';
import { StandingsService } from '@app/standings/shared/services/standings.service';

@Component({
  selector: 'app-standings-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})
export class DriversComponent implements OnInit {
  standing$!: Observable<DriverStandingsList>;

  constructor(private standingService: StandingsService) {}

  ngOnInit(): void {
    this.standing$ = this.standingService
      .drivers()
      .pipe(
        map((response) => response.MRData.StandingsTable.StandingsLists[0])
      );
  }
}
