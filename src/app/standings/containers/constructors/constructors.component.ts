import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ConstructorStandingsList } from '@shared/models/constructor.model';
import { StandingsService } from '@app/standings/shared/services/standings.service';

@Component({
  selector: 'app-standings-constructors',
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
