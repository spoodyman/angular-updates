import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-template-let',
  templateUrl: './template-let.component.html',
  imports: [AsyncPipe]
})
export class TemplateLetComponent {
  readonly items$ = of([{ name: 'Item 1' }, { name: 'Item 2', prop1: 'value1' }]);

}
