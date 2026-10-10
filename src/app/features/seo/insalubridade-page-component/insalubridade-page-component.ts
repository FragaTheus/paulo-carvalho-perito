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
  selector: 'app-insalubridade-page-component',
  imports: [PageHeroComponent, CardSectionComponent, FaqComponent, ContatoSectionComponent],
  templateUrl: './insalubridade-page-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsalubridadePageComponent {
  readonly path = '/insalubridade';
  readonly heroLinks: IPageHeroLink[] = [
    { fragment: 'insalubridade-agentes', label: 'Agentes avaliados' },
    { fragment: 'insalubridade-faq', label: 'Dúvidas frequentes' },
  ];

  readonly avaliacaoItems: ICardSectionItem[] = [
    {
      title: 'Agentes físicos',
      description:
        'Ruído, calor, vibração, radiações e umidade, medidos conforme os limites e a metodologia previstos na NR-15 e nas normas técnicas aplicáveis.',
    },
    {
      title: 'Agentes químicos',
      description:
        'Exposição a poeiras, vapores, solventes e outras substâncias, avaliada por concentração ou por análise qualitativa, conforme o anexo da norma.',
    },
    {
      title: 'Agentes biológicos',
      description:
        'Contato com agentes como lixo urbano, esgoto e pacientes em isolamento, enquadrado de acordo com a atividade e o anexo aplicável.',
    },
    {
      title: 'EPIs e neutralização',
      description:
        'Análise da entrega, do uso e da eficácia dos EPIs e das medidas coletivas, que podem neutralizar o agente e afastar o adicional.',
    },
  ];

  readonly etapasItems: ICardSectionItem[] = [
    {
      title: 'Análise e quesitos',
      description:
        'Leitura da inicial e da defesa para identificar agentes e funções em discussão e formular quesitos objetivos.',
    },
    {
      title: 'Preparação',
      description:
        'Organização de LTCAT, PGR/PPRA, PCMSO e fichas de EPI e dos pontos de atenção antes da diligência.',
    },
    {
      title: 'Vistoria',
      description:
        'Acompanhamento das medições e da inspeção do posto de trabalho, registrando métodos, equipamentos e condições.',
    },
    {
      title: 'Parecer sobre o laudo',
      description:
        'Análise do enquadramento, do grau e da neutralização apontados pelo perito, com parecer concordante ou divergente.',
    },
  ];

  readonly faqItems: IFaqItem[] = [
    {
      question:
        'Como é a perícia de insalubridade quando a empresa fechou ou o local foi desativado?',
      answer:
        'A perícia é obrigatória para verificar a insalubridade, mas, quando não é possível realizá-la, como no fechamento da empresa, o juiz pode usar outros meios de prova (OJ 278 da SBDI-1 do TST). O assistente técnico ajuda a avaliar se a perícia em local semelhante ou a prova documental retratam as condições reais.',
    },
    {
      question: 'Quem pode fazer a perícia de insalubridade?',
      answer:
        'A CLT determina que a caracterização e a classificação da insalubridade sejam feitas por perícia a cargo de médico do trabalho ou engenheiro do trabalho (art. 195). Paulo Carvalho é engenheiro de segurança do trabalho, com mais de 20 anos de atuação pericial.',
    },
    {
      question: 'Quais são os graus de insalubridade e o valor do adicional?',
      answer:
        'O adicional é de 10% (grau mínimo), 20% (médio) ou 40% (máximo), conforme o enquadramento do agente na NR-15 (CLT, art. 192). A base de cálculo segue a legislação e o entendimento vigentes para a categoria.',
    },
    {
      question: 'O EPI elimina a insalubridade?',
      answer:
        'O uso de EPI eficaz pode neutralizar o agente e afastar o adicional, mas é preciso demonstrar entrega, treinamento, fiscalização do uso e adequação do equipamento ao risco. Para alguns agentes, como o ruído, a análise é mais complexa.',
    },
    {
      question: 'O laudo de insalubridade é a mesma coisa que o LTCAT?',
      answer:
        'Não. O LTCAT é um documento da empresa sobre as condições ambientais de trabalho. O laudo de insalubridade é a prova pericial produzida no processo, e o LTCAT costuma ser um dos documentos analisados nela.',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Assistente Técnico em Insalubridade SP | Paulo Carvalho',
      description:
        'Assistente técnico em perícia de insalubridade em São Paulo: agentes, EPIs, quesitos e parecer sobre o laudo (NR-15) para advogados e empresas.',
      path: '/insalubridade',
    });
  }
}
