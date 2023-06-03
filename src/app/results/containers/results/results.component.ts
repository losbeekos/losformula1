import { map, Observable } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChevronDoubleRightSolid,
  heroChevronDoubleLeftSolid,
} from '@ng-icons/heroicons/solid';
import { ResultsService } from '@app/results/services/results.service';
import { CountryEmojiComponent } from '@src/app/shared/components/country-emoji/country-emoji.component';
import { TableComponent } from '@shared/components/table/table.component';
import { TableThComponent } from '@shared/components/table/th/th.component';
import { TableCaptionComponent } from '@shared/components/table/caption/caption.component';
import { TableHeadComponent } from '@shared/components/table/head/head.component';
import { TableTrComponent } from '@shared/components/table/tr/tr.component';
import { TableTdComponent } from '@shared/components/table/td/td.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CdkAccordionModule,
    CountryEmojiComponent,
    LoaderComponent,
    TableComponent,
    TableCaptionComponent,
    TableHeadComponent,
    TableThComponent,
    TableTrComponent,
    TableThComponent,
    TableTdComponent,
    NgIconComponent,
  ],
  viewProviders: [
    provideIcons({ heroChevronDoubleRightSolid, heroChevronDoubleLeftSolid }),
  ],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  readonly resultsService = inject(ResultsService);

  open = false;

  races$!: Observable<any>;

  ngOnInit(): void {
    this.races$ = this.resultsService.current().pipe(
      map((races: any) => races.MRData.RaceTable.Races), // 🤢
      map((races) => races.sort((a: any, b: any) => b.round - a.round))
    );
  }
}
