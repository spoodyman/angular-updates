import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-to-signal-equals',
  templateUrl: './to-signal-equals.component.html',
  imports: []
})
export class ToSignalEqualsComponent {
  private readonly testSubject = new Subject<string[]>();

  testSignal = toSignal(this.testSubject, {
    initialValue: [],
    equal: (a: string[], b: string[]) =>
     a.length === b.length && a.every((value, index) => value === b[index])
  });

  constructor() {
    // Update 1
    this.testSubject.next(['a', 'b', 'c']);
    this.testSubject.next(['a', 'b', 'c']);

    // Update 2
    this.testSubject.next(['a', 'b', 'd']);
  }
}
