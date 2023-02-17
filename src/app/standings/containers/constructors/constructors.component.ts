import { map, Observable } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorStandingsList } from '@shared/models/constructor.model';
import { StandingsService } from '@app/standings/shared/services/standings.service';
import { NavComponent } from '@app/standings/shared/components/nav/nav.component';
import { TableComponent } from '@shared/components/table/table.component';
import { TableThComponent } from '@shared/components/table/th/th.component';
import { TableCaptionComponent } from '@shared/components/table/caption/caption.component';
import { TableHeadComponent } from '@shared/components/table/head/head.component';
import { TableTrComponent } from '@shared/components/table/tr/tr.component';
import { TableTdComponent } from '@shared/components/table/td/td.component';

@Component({
  standalone: true,
  selector: 'app-standings-constructors',
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
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.css'],
})
export class ConstructorsComponent implements OnInit {
  readonly standingService = inject(StandingsService);

  standing$!: Observable<ConstructorStandingsList>;

  ngOnInit(): void {
    this.standing$ = this.standingService
      .constructors()
      .pipe(
        map((response) => response.MRData.StandingsTable.StandingsLists[0])
      );
  }
}
