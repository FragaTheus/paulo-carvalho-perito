import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { CardDirective } from '../../../../../ui/directives/card-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';

interface IVistoriaStep {
  title: string;
  description: string;
}

@Component({
  selector: 'app-empresas-vistoria-section-component',
  imports: [ContainerDirective, CardDirective, EyebrowComponent],
  templateUrl: './empresas-vistoria-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresasVistoriaSectionComponent {
  readonly steps: IVistoriaStep[] = [
    {
      title: 'Notificação da perícia',
      description:
        'Ao receber a notificação, o jurídico define o assistente técnico e os quesitos no prazo da decisão. O CPC prevê 15 dias da intimação (art. 465, § 1º), mas o juiz pode fixar prazo diferente.',
    },
    {
      title: 'Preparação interna',
      description:
        'Reunião dos documentos técnicos, das fichas de EPI e das informações sobre a função, a jornada e os agentes presentes no posto de trabalho.',
    },
    {
      title: 'Dia da vistoria',
      description:
        'O perito deve avisar as partes com antecedência mínima de 5 dias (CPC, art. 466, § 2º). O assistente técnico acompanha a diligência junto à empresa.',
    },
    {
      title: 'Leitura do laudo',
      description:
        'Com o laudo juntado, o assistente técnico apresenta o parecer (CPC, art. 477, § 1º) e o advogado da empresa formaliza a manifestação.',
    },
  ];
}
