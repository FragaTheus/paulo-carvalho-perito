import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ContainerDirective } from '../../directives/container-directive';
import { CardDirective } from '../../directives/card-directive';
import { EyebrowComponent } from '../eyebrow-component/eyebrow-component';

export type CardSectionLayout = 'stacked' | 'side' | 'bento';

export interface ICardSectionItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-section-component',
  imports: [ContainerDirective, CardDirective, EyebrowComponent, NgTemplateOutlet],
  templateUrl: './card-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSectionComponent {
  readonly sectionId = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input<string>();
  readonly items = input.required<ICardSectionItem[]>();
  readonly ordered = input(false);
  readonly columns = input<2 | 4>(2);
  readonly layout = input<CardSectionLayout>('stacked');

  readonly listClasses = computed(() => {
    switch (this.layout()) {
      case 'side':
        return 'mt-gutter lg:mt-0';
      case 'bento':
        return 'grid grid-cols-1 lg:grid-cols-3 mt-gutter';
      default:
        return this.columns() === 4
          ? 'grid grid-cols-1 lg:grid-cols-4 mt-gutter'
          : 'grid grid-cols-1 md:grid-cols-2 mt-gutter';
    }
  });

  // No bento, o primeiro e o último card ocupam duas colunas
  wide(index: number): boolean {
    return index === 0 || index === this.items().length - 1;
  }
}
