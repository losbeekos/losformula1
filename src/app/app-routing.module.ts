import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/calendar/calendar.module').then((m) => m.CalendarModule),
  },
  {
    path: 'standings',
    loadChildren: () =>
      import('../app/standings/standings.module').then(
        (m) => m.StandingsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
