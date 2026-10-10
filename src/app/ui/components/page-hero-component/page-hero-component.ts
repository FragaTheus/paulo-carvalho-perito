import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerDirective } from '../../directives/container-directive';
import { ButtonDirective } from '../../directives/button-directive';
import { EyebrowComponent } from '../eyebrow-component/eyebrow-component';
import { CtaButtonComponent } from '../cta-button-component/cta-button-component';

export interface IPageHeroLink {
  fragment: string;
  label: string;
}

@Component({
  selector: 'app-page-hero-component',
  imports: [ContainerDirective, ButtonDirective, RouterLink, EyebrowComponent, CtaButtonComponent],
  templateUrl: './page-hero-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeroComponent {
  readonly sectionId = input.required<string>();
  readonly path = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly titleSuffix = input<string>();
  readonly description = input.required<string>();
  readonly ctaId = input.required<string>();
  readonly ctaLabel = input.required<string>();
  readonly ctaMessage = input.required<string>();
  readonly links = input<IPageHeroLink[]>([]);
}
