import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ButtonDirective } from '../../directives/button-directive';

@Component({
  selector: 'app-cta-button-component',
  imports: [ButtonDirective],
  templateUrl: './cta-button-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaButtonComponent {
  readonly id = input.required<string>();
  readonly label = input<string>();
  readonly message = input.required<string>();
  readonly href = computed(
    () => `https://wa.me/5511972248445?text=${encodeURIComponent(this.message())}`,
  );
}
