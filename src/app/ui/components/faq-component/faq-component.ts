import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContainerDirective } from '../../directives/container-directive';
import { EyebrowComponent } from '../eyebrow-component/eyebrow-component';

export interface IFaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-component',
  imports: [ContainerDirective, EyebrowComponent],
  templateUrl: './faq-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  readonly sectionId = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly layout = input<'stacked' | 'side'>('stacked');
  readonly items = input.required<IFaqItem[]>();
}
