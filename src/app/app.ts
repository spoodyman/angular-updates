import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateLiterals } from './features/template-literals/template-literals';
import { PropertyInObject } from './features/property-in-object/property-in-object';
import { NgComponentOutletExample } from './features/ng-component-outlet/ng-component-outlet';
import { NgComponentVcrExample } from './features/ng-component-vcr/ng-component-vcr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateLiterals, PropertyInObject, NgComponentOutletExample, NgComponentVcrExample],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-updates';
}
