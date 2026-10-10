import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { CardDirective } from '../../../../../ui/directives/card-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';

interface IApoioCard {
  title: string;
  description: string;
}

@Component({
  selector: 'app-advogados-apoio-section-component',
  imports: [ContainerDirective, CardDirective, EyebrowComponent],
  templateUrl: './advogados-apoio-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvogadosApoioSectionComponent {
  readonly cards: IApoioCard[] = [
    {
      title: 'Quesitos técnicos',
      description:
        'Leitura da petição inicial, da defesa e dos documentos para formular quesitos objetivos, alinhados aos pontos controvertidos e ao prazo fixado pelo juiz.',
    },
    {
      title: 'Orientação para a vistoria',
      description:
        'Indicação da documentação técnica que costuma ser pedida na diligência, como LTCAT, PGR/PPRA, PCMSO e fichas de EPI, e dos pontos de atenção do caso.',
    },
    {
      title: 'Acompanhamento da diligência',
      description:
        'Presença na vistoria do perito do juízo para observar medições, métodos e condições reais do posto de trabalho e registrar o que for relevante.',
    },
    {
      title: 'Parecer sobre o laudo',
      description:
        'Análise das conclusões do perito e elaboração de parecer técnico, concordante ou divergente, para embasar a manifestação ou a impugnação da parte.',
    },
  ];
}
