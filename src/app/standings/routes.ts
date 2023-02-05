import { Routes } from '@angular/router';
import { ConstructorsComponent } from './containers/constructors/constructors.component';
import { DriversComponent } from './containers/drivers/drivers.component';

export const STANDINGS_ROUTES: Routes = [
  {
    path: '',
    component: DriversComponent,
  },
  {
    path: 'constructors',
    component: ConstructorsComponent,
  },
];
