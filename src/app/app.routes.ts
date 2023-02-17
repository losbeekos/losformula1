import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./calendar/containers/calendar/calendar.component').then(
        (m) => m.CalendarComponent
      ),
  },
  {
    path: 'standings',
    loadChildren: () =>
      import('./standings/routes').then((m) => m.STANDINGS_ROUTES),
  },
  // {
  //   path: 'results',
  //   loadChildren: () =>
  //     import('./results/routes').then((m) => m.RESULTS_ROUTES),
  // },
];
