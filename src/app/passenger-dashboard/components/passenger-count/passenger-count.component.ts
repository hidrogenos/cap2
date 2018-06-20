import { Component, Input } from '@angular/core';

//models
import { Pasajero } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.scss'],
  template: `
        <div>
            Aerolinea
        </div>
        <div>
            Total checked In passengers: {{ checkedInPassengers().length}}/{{ items.length }}
        </div>
    `
})
export class PassengerCountComponent {
  @Input() items: Pasajero[];

  constructor() {}

  checkedInPassengers() {
    if (this.items) {
      return this.items.filter(pasajero => pasajero.checkedIn);
    }
  }
}
