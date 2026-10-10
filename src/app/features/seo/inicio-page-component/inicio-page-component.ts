import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PropostaSectionComponent } from './sections/proposta-section-component/proposta-section-component';
import { DemandaSectionComponent } from './sections/demanda-section-component/demanda-section-component';
import { AtuacaoSectionComponent } from './sections/atuacao-section-component/atuacao-section-component';
import { PericiaSectionComponent } from './sections/pericia-section-component/pericia-section-component';
import { AutoridadeSectionComponent } from './sections/autoridade-section-component/autoridade-section-component';
import { ContatoSectionComponent } from './sections/contato-section-component/contato-section-component';
import { FaqSectionComponent } from './sections/faq-section-component/faq-section-component';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-inicio-page-component',
  imports: [
    PropostaSectionComponent,
    DemandaSectionComponent,
    AtuacaoSectionComponent,
    PericiaSectionComponent,
    AutoridadeSectionComponent,
    FaqSectionComponent,
    ContatoSectionComponent,
  ],
  templateUrl: './inicio-page-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPageComponent {
  constructor() {
    inject(SeoService).update({
      title: 'Assistente Técnico em Perícia Trabalhista SP | Paulo Carvalho',
      description:
        'Assistente técnico em perícias trabalhistas em São Paulo: insalubridade, periculosidade e acidente de trabalho. Engenheiro com +20 anos de atuação.',
      path: '/',
    });
  }
}
