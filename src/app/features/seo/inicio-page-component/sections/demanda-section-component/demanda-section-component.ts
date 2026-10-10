import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { CardDirective } from '../../../../../ui/directives/card-directive';
import { ButtonDirective } from '../../../../../ui/directives/button-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';

interface ICard {
  title: string;
  description: string;
  link?: { href: string; label: string };
}

@Component({
  selector: 'app-demanda-section-component',
  imports: [ContainerDirective, CardDirective, ButtonDirective, RouterLink, EyebrowComponent],
  templateUrl: './demanda-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemandaSectionComponent {
  readonly cards: ICard[] = [
    {
      title: 'Advogados trabalhistas',
      description: 'Apoio técnico em quesitos, prazos da perícia e parecer sobre o laudo.',
      link: { href: '/advogados', label: 'Conhecer atendimento' },
    },
    {
      title: 'Empresas e jurídico interno',
      description: 'Preparação da vistoria, documentação técnica e acompanhamento da perícia.',
      link: { href: '/empresas', label: 'Conhecer atendimento' },
    },
  ];
}
