import { Directive } from '@angular/core';

@Directive({
  selector: 'div[uiContainer]',
  host: {
    '[class]': 'defaultClass',
  },
})
export class ContainerDirective {
  readonly defaultClass = 'w-full max-w-container p-gutter mx-auto';
}
