import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { CalendarRaceCardComponent } from './components/race-card/race-card.component';
import { CalendarRaceSessionsComponent } from './components/race-sessions/race-sessions.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarRaceCardComponent,
    CalendarRaceSessionsComponent,
  ],
  imports: [SharedModule, CalendarRoutingModule],
})
export class CalendarModule {}
