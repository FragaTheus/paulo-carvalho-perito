import { Component } from '@angular/core';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { CardDirective } from '../../../../../ui/directives/card-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';

interface IPericiaCard {
  title: string;
  description: string;
}

@Component({
  selector: 'app-pericia-section-component',
  imports: [ContainerDirective, CardDirective, EyebrowComponent],
  templateUrl: './pericia-section-component.html',
})
export class PericiaSectionComponent {
  readonly periciaCards: IPericiaCard[] = [
    {
      title: 'Análise e quesitos',
      description: 'Leitura do processo e formulação de quesitos após a nomeação do perito.',
    },
    {
      title: 'Preparação',
      description:
        'Documentação técnica e pontos de atenção antes da vistoria.',
    },
    {
      title: 'Diligência',
      description: 'Acompanhamento da diligência e da vistoria do perito do juízo.',
    },
    {
      title: 'Parecer sobre o laudo',
      description:
        'Parecer técnico sobre o laudo para subsidiar a manifestação da parte.',
    },
  ];
}
