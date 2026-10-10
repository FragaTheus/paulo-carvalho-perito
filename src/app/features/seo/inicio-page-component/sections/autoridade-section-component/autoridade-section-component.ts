import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { CardDirective } from '../../../../../ui/directives/card-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';
import { CreaCopyButtonComponent } from '../../../../../ui/components/crea-copy-button-component/crea-copy-button-component';

interface IAutoridadeCard {
  title: string;
  description: string;
  isFirst?: boolean;
}

@Component({
  selector: 'app-autoridade-section-component',
  imports: [
    NgOptimizedImage,
    ContainerDirective,
    CardDirective,
    EyebrowComponent,
    CreaCopyButtonComponent,
  ],
  templateUrl: './autoridade-section-component.html',
})
export class AutoridadeSectionComponent {
  readonly autoridadeCards: IAutoridadeCard[] = [
    {
      title: '+20 anos',
      description: 'Em Engenharia de Segurança do Trabalho',
      isFirst: true,
    },
    {
      title: '+1.500',
      description: 'Assistências técnicas concluídas',
    },
    {
      title: '+3.000',
      description: 'Perícias judiciais realizadas',
    },
  ];
}
