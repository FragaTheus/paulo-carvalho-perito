import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaqComponent, IFaqItem } from '../../../../../ui/components/faq-component/faq-component';

@Component({
  selector: 'app-faq-section-component',
  imports: [FaqComponent],
  templateUrl: './faq-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent {
  readonly faqItems: IFaqItem[] = [
    {
      question: 'O que faz o assistente técnico na perícia trabalhista?',
      answer:
        'Na perícia trabalhista, o assistente técnico analisa o caso, formula quesitos, acompanha a diligência e elabora parecer técnico sobre o laudo do perito do juízo.',
    },
    {
      question: 'Qual a diferença entre perito judicial e assistente técnico?',
      answer:
        'O perito judicial é nomeado pelo juiz e atua de forma imparcial. O assistente técnico é indicado pela parte e oferece o contraponto técnico à prova pericial (CPC, art. 466, § 1º).',
    },
    {
      question: 'É obrigatório ter assistente técnico?',
      answer:
        'Não. A indicação é facultativa (Súmula 341 do TST). O assistente técnico acrescenta acompanhamento especializado da vistoria e parecer técnico.',
    },
    {
      question: 'Em quais tipos de perícia o assistente técnico atua?',
      answer:
        'Em perícias trabalhistas de insalubridade, periculosidade e acidente de trabalho, para advogados e empresas. Cada área tem uma página própria com critérios e etapas específicas.',
    },
    {
      question: 'Em quais regiões o atendimento é feito?',
      answer:
        'Atendimento em São Paulo (capital) e na Grande São Paulo, com acompanhamento presencial das diligências. Para outras comarcas, consulte a disponibilidade.',
    },
  ];
}
