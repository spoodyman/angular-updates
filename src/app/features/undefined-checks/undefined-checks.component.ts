import { Component } from '@angular/core';

@Component({
  selector: 'app-undefined-checks',
  templateUrl: './undefined-checks.component.html',
  imports: []
})
export class UndefinedChecksComponent {
  testList = [{ name: 1 }, undefined, { name: 2 }, { name: 3 }, undefined, { name: 4 }, null];
  enumValue = 2;

  constructor() {
    const testList2 = this.testList.filter(test => test !== undefined && test !== null);
    testList2.forEach(test => console.log('name:', test.name));
  }
}
