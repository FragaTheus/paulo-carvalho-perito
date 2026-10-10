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
  selector: 'app-acidente-de-trabalho-page-component',
  imports: [PageHeroComponent, CardSectionComponent, FaqComponent, ContatoSectionComponent],
  templateUrl: './acidente-de-trabalho-page-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcidenteDeTrabalhoPageComponent {
  readonly path = '/acidente-de-trabalho';
  readonly heroLinks: IPageHeroLink[] = [
    { fragment: 'acidente-analise', label: 'O que é analisado' },
    { fragment: 'acidente-faq', label: 'Dúvidas frequentes' },
  ];

  readonly avaliacaoItems: ICardSectionItem[] = [
    {
      title: 'Causas do acidente',
      description:
        'Reconstituição da dinâmica do fato, da tarefa executada e dos fatores que contribuíram para a ocorrência.',
    },
    {
      title: 'Ambiente e organização',
      description:
        'Condições do local, layout, sinalização, iluminação e organização do trabalho no momento do acidente.',
    },
    {
      title: 'Máquinas e equipamentos',
      description:
        'Proteções, dispositivos de segurança, manutenção e adequação às normas aplicáveis, como a NR-12.',
    },
    {
      title: 'Medidas de segurança',
      description:
        'Treinamentos, procedimentos, análises de risco, fornecimento e uso de EPIs e documentos como a CAT.',
    },
  ];

  readonly etapasItems: ICardSectionItem[] = [
    {
      title: 'Análise e quesitos',
      description:
        'Leitura dos documentos do acidente, da defesa e dos registros de segurança para formular os quesitos.',
    },
    {
      title: 'Preparação',
      description:
        'Reunião de CAT, treinamentos, procedimentos, laudos e registros de manutenção e fiscalização.',
    },
    {
      title: 'Vistoria',
      description:
        'Acompanhamento da inspeção do local e dos equipamentos, registrando as condições relevantes.',
    },
    {
      title: 'Parecer sobre o laudo',
      description:
        'Análise do nexo e das conclusões técnicas do perito, com parecer concordante ou divergente.',
    },
  ];

  readonly faqItems: IFaqItem[] = [
    {
      question: 'Qual a diferença entre perícia técnica e perícia médica no acidente de trabalho?',
      answer:
        'A perícia médica avalia a lesão, o nexo com o trabalho e a incapacidade. A perícia técnica de engenharia avalia as causas do acidente, as condições do ambiente, as máquinas e as medidas de segurança. Os dois trabalhos podem aparecer no mesmo processo.',
    },
    {
      question: 'O que é a CAT e qual a sua importância na perícia?',
      answer:
        'A Comunicação de Acidente de Trabalho (CAT) registra a ocorrência e é um dos documentos analisados pela perícia. Ela não encerra a discussão sobre as causas e a responsabilidade, que dependem da análise técnica e das provas do processo.',
    },
    {
      question: 'Que documentos a empresa deve reunir em caso de acidente?',
      answer:
        'Em geral, a CAT, treinamentos do trabalhador, procedimentos e análises de risco, registros de manutenção de máquinas, fichas de EPI e laudos como PGR e PCMSO. A lista exata depende do caso.',
    },
    {
      question: 'O assistente técnico acompanha a vistoria do local do acidente?',
      answer:
        'Sim. O perito deve avisar as partes com antecedência mínima de 5 dias (CPC, art. 466, § 2º), o que permite ao assistente técnico acompanhar a inspeção do local e dos equipamentos.',
    },
    {
      question: 'O assistente técnico atua para o trabalhador ou para a empresa?',
      answer:
        'Para qualquer das partes. O assistente técnico é indicado pela parte e oferece o contraponto técnico à prova pericial, seja a empresa ou o trabalhador, por meio do advogado.',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Perícia Técnica de Acidente de Trabalho SP | Paulo Carvalho',
      description:
        'Assistência técnica em perícia de acidente de trabalho em São Paulo: causas, ambiente, máquinas e medidas de segurança, com quesitos e parecer.',
      path: '/acidente-de-trabalho',
    });
  }
}
