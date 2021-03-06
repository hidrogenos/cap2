import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  providers: [],
  exports: [PassengerDashboardComponent]
})
export class PassengerDashboardModule {}
