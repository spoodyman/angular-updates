import { afterRender, afterRenderEffect, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-after-render',
  templateUrl: './after-render.component.html'
})
export class AfterRenderComponent {
  readonly input = input.required<string>();
  readonly counter = signal<number>(1);

  constructor() {
    afterRenderEffect(() => {
      console.log(`Input value after render effect: ${this.input()}`);
    });

    afterRender(() => {
        console.log(`Input value after render: ${this.input()}`);
    })
  }

  addToCounter(): void {
    this.counter.update(value => value + 1);
  }
}
