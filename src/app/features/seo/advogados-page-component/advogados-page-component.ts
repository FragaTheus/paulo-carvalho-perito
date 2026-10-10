import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../../core/seo/seo.service';
import { FaqComponent, IFaqItem } from '../../../ui/components/faq-component/faq-component';
import { ContatoSectionComponent } from '../inicio-page-component/sections/contato-section-component/contato-section-component';
import { AdvogadosHeroSectionComponent } from './sections/advogados-hero-section-component/advogados-hero-section-component';
import { AdvogadosApoioSectionComponent } from './sections/advogados-apoio-section-component/advogados-apoio-section-component';
import { AdvogadosPrazosSectionComponent } from './sections/advogados-prazos-section-component/advogados-prazos-section-component';

@Component({
  selector: 'app-advogados-page-component',
  imports: [
    AdvogadosHeroSectionComponent,
    AdvogadosApoioSectionComponent,
    AdvogadosPrazosSectionComponent,
    FaqComponent,
    ContatoSectionComponent,
  ],
  templateUrl: './advogados-page-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvogadosPageComponent {
  readonly faqItems: IFaqItem[] = [
    {
      question: 'Quando devo indicar o assistente técnico?',
      answer:
        'O quanto antes após a nomeação do perito. A indicação e os quesitos seguem o prazo da decisão que nomeia o perito; o CPC prevê 15 dias da intimação (art. 465, § 1º), mas o juiz pode fixar prazo diferente.',
    },
    {
      question: 'O assistente técnico pode contestar o laudo do perito?',
      answer:
        'Ele apresenta parecer técnico sobre o laudo (CPC, art. 477, § 1º), e o advogado formaliza a manifestação ou a impugnação no processo com base nesse parecer. O perito do juízo deve esclarecer os pontos divergentes apontados (art. 477, § 2º).',
    },
    {
      question: 'Que documentos o advogado deve enviar?',
      answer:
        'Petição inicial, contestação, decisão que nomeou o perito e, quando houver, o laudo e a documentação técnica da empresa, como LTCAT, PGR/PPRA, PCMSO e fichas de EPI. Com isso é possível definir os pontos controvertidos e formular os quesitos.',
    },
    {
      question: 'O assistente técnico acompanha a vistoria?',
      answer:
        'Sim. O perito deve avisar as partes com antecedência mínima de 5 dias (CPC, art. 466, § 2º), o que permite acompanhar a diligência, observar medições e métodos e registrar o que for relevante.',
    },
    {
      question: 'Como é definido o orçamento para o escritório?',
      answer:
        'Os honorários do assistente técnico são de responsabilidade da parte que o indicou (CPC, art. 95) e variam conforme a complexidade do caso e o número de diligências. Envie o processo para receber a proposta.',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Assistente Técnico para Advogados em SP | Paulo Carvalho',
      description:
        'Assistente técnico para advogados em São Paulo: quesitos, diligência e parecer sobre o laudo em perícias trabalhistas.',
      path: '/advogados',
    });
  }
}
