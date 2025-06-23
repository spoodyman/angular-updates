import { Component, effect, Input, input, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
})
export class EffectsComponent {
  readonly fetchById = input.required<number>();
  readonly isLoading = signal(false);

  constructor() {
    effect(() => {
      const id = this.fetchById();
      if (id) {
        this.isLoading.set(true);
        // Simulate a fetch operation
        setTimeout(() => {
          console.log(`Fetched data for ID: ${id}`);
          this.isLoading.set(false);
        }, 1000);
      }
    })
  }
}
