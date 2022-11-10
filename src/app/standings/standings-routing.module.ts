import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorsComponent } from './containers/constructors/constructors.component';
import { DriversComponent } from './containers/drivers/drivers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DriversComponent,
      },
      {
        path: 'constructors',
        component: ConstructorsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandingsRoutingModule {}
