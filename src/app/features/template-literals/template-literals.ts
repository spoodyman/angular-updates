import { Component, input, output } from '@angular/core';

export interface TemplateLiteralsInputs {
  title: string;
}

@Component({
  selector: 'app-template-literals',
  templateUrl: './template-literals.html'
})
export class TemplateLiterals {
  readonly literal = 'Literal'
  readonly title = input<string>();

  readonly log = output<void>();

  literalMethod(strings: TemplateStringsArray, name: string) {
   return strings[0] + name + strings[1] + '!';
  }

  logClick(): void {
    this.log.emit();
  }
}
