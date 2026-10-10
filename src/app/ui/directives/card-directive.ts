import { Directive } from '@angular/core';

@Directive({
  selector: '[uiCard]',
  host: {
    class: 'p-gutter group border-border border-l',
  },
})
export class CardDirective {}
