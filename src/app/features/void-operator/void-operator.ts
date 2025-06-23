import { Component } from '@angular/core';

@Component({
  selector: 'app-void-operator',
  templateUrl: './void-operator.html',
  host: {
    '[attr.class]': 'className'
  }
})
export class VoidOperator {
  readonly className = 'void-operator';

  log(): boolean {
    console.log('This is a log message');
    return false;
  }
}
