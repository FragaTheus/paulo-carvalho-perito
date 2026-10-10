import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { CardDirective } from '../../../../../ui/directives/card-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';

interface IApoioCard {
  title: string;
  description: string;
}

@Component({
  selector: 'app-empresas-apoio-section-component',
  imports: [ContainerDirective, CardDirective, EyebrowComponent],
  templateUrl: './empresas-apoio-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresasApoioSectionComponent {
  readonly cards: IApoioCard[] = [
    {
      title: 'Entendimento do passivo',
      description:
        'Análise da petição inicial e da defesa para identificar o que será avaliado na perícia e quais condições de trabalho precisam ser demonstradas.',
    },
    {
      title: 'Documentação técnica',
      description:
        'Organização de LTCAT, PGR/PPRA, PCMSO, fichas de EPI e treinamentos, para que o perito encontre registros consistentes sobre o ambiente de trabalho.',
    },
    {
      title: 'Acompanhamento da vistoria',
      description:
        'Presença na diligência do perito do juízo para observar medições, métodos e condições reais do posto de trabalho e registrar o que for relevante.',
    },
    {
      title: 'Parecer sobre o laudo',
      description:
        'Análise das conclusões do perito e elaboração de parecer técnico, concordante ou divergente, para subsidiar a manifestação da empresa pelo advogado.',
    },
  ];
}
