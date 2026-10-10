import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../../core/seo/seo.service';
import { FaqComponent, IFaqItem } from '../../../ui/components/faq-component/faq-component';
import {
  CardSectionComponent,
  ICardSectionItem,
} from '../../../ui/components/card-section-component/card-section-component';
import {
  IPageHeroLink,
  PageHeroComponent,
} from '../../../ui/components/page-hero-component/page-hero-component';
import { ContatoSectionComponent } from '../inicio-page-component/sections/contato-section-component/contato-section-component';

@Component({
  selector: 'app-periculosidade-page-component',
  imports: [PageHeroComponent, CardSectionComponent, FaqComponent, ContatoSectionComponent],
  templateUrl: './periculosidade-page-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PericulosidadePageComponent {
  readonly path = '/periculosidade';
  readonly heroLinks: IPageHeroLink[] = [
    { fragment: 'periculosidade-atividades', label: 'Atividades avaliadas' },
    { fragment: 'periculosidade-faq', label: 'Dúvidas frequentes' },
  ];

  readonly avaliacaoItems: ICardSectionItem[] = [
    {
      title: 'Inflamáveis e explosivos',
      description:
        'Manuseio, armazenamento e abastecimento, considerando áreas de risco, quantidades e tempo de permanência.',
    },
    {
      title: 'Energia elétrica',
      description:
        'Atividades em sistemas elétricos de potência e instalações energizadas, avaliadas conforme a norma e a função exercida.',
    },
    {
      title: 'Segurança pessoal e patrimonial',
      description:
        'Vigilantes e atividades expostas a roubos ou violência física, conforme os requisitos da norma.',
    },
    {
      title: 'Motocicleta',
      description:
        'Atividades em motocicleta ou motoneta em vias públicas, com as exceções previstas na própria norma.',
    },
  ];

  readonly etapasItems: ICardSectionItem[] = [
    {
      title: 'Análise e quesitos',
      description:
        'Leitura do processo para definir a atividade, a área de risco e a frequência de exposição em discussão.',
    },
    {
      title: 'Preparação',
      description:
        'Levantamento de layout, croquis, registros de atividade e documentos que descrevam a função.',
    },
    {
      title: 'Vistoria',
      description:
        'Acompanhamento da inspeção, registrando distâncias, quantidades, equipamentos e rotina real do trabalhador.',
    },
    {
      title: 'Parecer sobre o laudo',
      description:
        'Análise do enquadramento e do tempo de exposição apontados pelo perito, com parecer concordante ou divergente.',
    },
  ];

  readonly faqItems: IFaqItem[] = [
    {
      question: 'Qual é o valor do adicional de periculosidade?',
      answer:
        'O adicional é de 30% sobre o salário-base, sem acréscimos de gratificações, prêmios ou participação nos lucros (CLT, art. 193, § 1º).',
    },
    {
      question: 'A exposição eventual ou por tempo reduzido gera o adicional?',
      answer:
        'Depende. O entendimento do TST (Súmula 364) distingue o contato permanente ou intermitente, que gera o adicional, do eventual ou por tempo extremamente reduzido, que não gera. A análise do caso concreto é feita pela perícia.',
    },
    {
      question: 'Motociclista tem direito ao adicional de periculosidade?',
      answer:
        'A atividade em motocicleta em vias públicas está prevista no art. 193, § 4º da CLT e na NR-16, com exceções, como o deslocamento casa-trabalho e o uso de veículo para fins pessoais. O enquadramento depende da função.',
    },
    {
      question: 'Como funciona a perícia de periculosidade por energia elétrica?',
      answer:
        'O perito avalia se a atividade se dá em sistemas elétricos de potência ou instalações energizadas, a função e a rotina do trabalhador. O assistente técnico acompanha a vistoria e analisa o enquadramento no laudo.',
    },
    {
      question: 'EPI neutraliza a periculosidade?',
      answer:
        'Em regra, não. A periculosidade decorre do risco acentuado da atividade, e não da exposição a um agente que o EPI possa atenuar, como ocorre em parte dos casos de insalubridade.',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Assistente Técnico em Periculosidade SP | Paulo Carvalho',
      description:
        'Assistente técnico em perícia de periculosidade em São Paulo: inflamáveis, energia elétrica, vigilância e motocicleta (NR-16). Quesitos e parecer sobre o laudo.',
      path: '/periculosidade',
    });
  }
}
