import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../../core/seo/seo.service';
import { FaqComponent, IFaqItem } from '../../../ui/components/faq-component/faq-component';
import { ContatoSectionComponent } from '../inicio-page-component/sections/contato-section-component/contato-section-component';
import { EmpresasHeroSectionComponent } from './sections/empresas-hero-section-component/empresas-hero-section-component';
import { EmpresasApoioSectionComponent } from './sections/empresas-apoio-section-component/empresas-apoio-section-component';
import { EmpresasVistoriaSectionComponent } from './sections/empresas-vistoria-section-component/empresas-vistoria-section-component';

@Component({
  selector: 'app-empresas-page-component',
  imports: [
    EmpresasHeroSectionComponent,
    EmpresasApoioSectionComponent,
    EmpresasVistoriaSectionComponent,
    FaqComponent,
    ContatoSectionComponent,
  ],
  templateUrl: './empresas-page-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresasPageComponent {
  readonly faqItems: IFaqItem[] = [
    {
      question: 'Quando a empresa deve contratar um assistente técnico?',
      answer:
        'O quanto antes após a notificação da perícia, quando se definem os quesitos e se prepara a vistoria. O perito deve avisar as partes com antecedência mínima de 5 dias (CPC, art. 466, § 2º).',
    },
    {
      question: 'Que documentos a empresa deve separar para a vistoria?',
      answer:
        'Em geral, LTCAT, PGR/PPRA, PCMSO, fichas de entrega de EPI, treinamentos e informações sobre a função e a jornada do trabalhador. A lista exata depende do tipo de perícia e do caso.',
    },
    {
      question: 'O assistente técnico atende o jurídico interno ou o escritório da empresa?',
      answer:
        'Sim. O trabalho é feito em conjunto com o advogado responsável pelo processo, que formaliza as manifestações. O assistente técnico fornece a análise e o parecer técnico.',
    },
    {
      question: 'A empresa arca com os custos do assistente técnico?',
      answer:
        'Sim, a parte que indica o assistente técnico responde pelos honorários, ainda que vença o objeto da perícia (Súmula 341 do TST). O valor depende da complexidade do caso e do número de diligências; envie os dados do processo para receber orçamento.',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Assistente Técnico para Empresas em SP | Paulo Carvalho',
      description:
        'Assistência técnica para empresas em perícias trabalhistas em São Paulo: preparação da vistoria e documentos para insalubridade, periculosidade e acidentes.',
      path: '/empresas',
    });
  }
}
