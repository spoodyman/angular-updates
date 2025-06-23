import { AsyncPipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-router-outlet-data',
  templateUrl: './router-outlet-data.component.html',
  imports: []
})
export class RouterOutletDataComponent {
  readonly routerOutletData = inject<Signal<string>>(ROUTER_OUTLET_DATA);;
}
