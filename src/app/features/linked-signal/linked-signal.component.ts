import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  templateUrl: './linked-signal.component.html',
})
export class LinkedSignalComponent {
  readonly items = signal([{ name: 'Item 1' }, { name: 'Item 2' }]);
  readonly selectedItem = linkedSignal({
    source: this.items,
    computation: (source, previous) => {
      if(previous?.value) {
        return source.find(item => item.name === previous.value);
      }
      return source[0].name;
    }
  });

  onSelect(name: string) {
    this.selectedItem.set(name);
  }
}
