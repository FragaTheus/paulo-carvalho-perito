import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { CardDirective } from '../../../../../ui/directives/card-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';

interface IPrazoStep {
  title: string;
  description: string;
}

@Component({
  selector: 'app-advogados-prazos-section-component',
  imports: [ContainerDirective, CardDirective, EyebrowComponent],
  templateUrl: './advogados-prazos-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvogadosPrazosSectionComponent {
  readonly steps: IPrazoStep[] = [
    {
      title: 'Nomeação do perito',
      description:
        'O juiz nomeia o perito e abre prazo para indicar assistente técnico e apresentar quesitos. O CPC prevê 15 dias da intimação (art. 465, § 1º), mas a decisão pode fixar prazo diferente.',
    },
    {
      title: 'Aviso da diligência',
      description:
        'O perito deve comunicar as partes com antecedência mínima de 5 dias (CPC, art. 466, § 2º), o que permite ao assistente técnico acompanhar a vistoria.',
    },
    {
      title: 'Entrega do laudo',
      description:
        'Com o laudo juntado, as partes são intimadas a se manifestar. O assistente técnico apresenta o parecer no mesmo prazo comum de 15 dias (CPC, art. 477, § 1º).',
    },
    {
      title: 'Esclarecimentos do perito',
      description:
        'Se o parecer apontar divergências, o perito do juízo deve esclarecê-las (CPC, art. 477, § 2º), fortalecendo a manifestação da parte.',
    },
  ];
}
