import { Component, OnInit } from '@angular/core';
import { Pasajero } from './../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
        <div>
        <passenger-count [items]="pasajeros"></passenger-count>
        <passenger-detail></passenger-detail>
            <div>Pasajeros</div>
                <ul>
                    <li *ngFor="let pasajero of pasajeros; let i =index;">
                        <span class="status"  
                            [ngClass]="{ 'checked-in': pasajero.checkedIn, 'checked-out': !pasajero.checkedIn }">
                        </span>
                        {{ i }}: {{ pasajero.fullname }}
                        <p>{{ pasajero | json }}</p>
                        <p>check in Date: {{ pasajero.checkedIn ? (pasajero.checkInDate | date: 'yyyy-MMM-dd' | uppercase) : ' Not checked In' }}</p>
                        <p>cantidad hijos:  {{ pasajero.children ?  pasajero.children?.length : 0 }}</p>
                    </li>
                </ul>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
  pasajeros: Pasajero[];
  constructor() {}

  ngOnInit() {
    console.log('on init');
    this.pasajeros = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
      },
      {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      }
    ];
  }
}
