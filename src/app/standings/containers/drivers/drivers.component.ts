import { map, Observable } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverStandingsList } from '@shared/models/driver.model';
import { StandingsService } from '@app/standings/shared/services/standings.service';
import { NavComponent } from '@app/standings/shared/components/nav/nav.component';
import { TableComponent } from '@app/shared/components/table/table.component';
import { TableThComponent } from '@src/app/shared/components/table/th/th.component';
import { TableCaptionComponent } from '@src/app/shared/components/table/caption/caption.component';
import { TableHeadComponent } from '@src/app/shared/components/table/head/head.component';
import { TableTrComponent } from '@src/app/shared/components/table/tr/tr.component';
import { TableTdComponent } from '@src/app/shared/components/table/td/td.component';

@Component({
  standalone: true,
  selector: 'app-standings-drivers',
  imports: [
    CommonModule,
    NavComponent,
    TableComponent,
    TableCaptionComponent,
    TableHeadComponent,
    TableThComponent,
    TableTrComponent,
    TableThComponent,
    TableTdComponent,
  ],
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})
export class DriversComponent implements OnInit {
  readonly standingService = inject(StandingsService);

  standing$!: Observable<DriverStandingsList>;

  ngOnInit(): void {
    this.standing$ = this.standingService
      .drivers()
      .pipe(
        map((response) => response.MRData.StandingsTable.StandingsLists[0])
      );
  }
}
