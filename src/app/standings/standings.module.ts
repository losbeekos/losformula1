import { NgModule } from '@angular/core';

import { StandingsRoutingModule } from './standings-routing.module';
import { DriversComponent } from './containers/drivers/drivers.component';
import { ConstructorsComponent } from './containers/constructors/constructors.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DriversComponent, ConstructorsComponent, NavComponent],
  imports: [SharedModule, StandingsRoutingModule],
})
export class StandingsModule {}
