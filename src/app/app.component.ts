import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCalendarSolid,
  heroChartBarSolid,
  heroClockSolid,
} from '@ng-icons/heroicons/solid';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, NgIconComponent],
  viewProviders: [
    provideIcons({ heroCalendarSolid, heroChartBarSolid, heroClockSolid }),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
