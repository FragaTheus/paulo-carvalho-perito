import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '../../../../../ui/directives/button-directive';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { CardDirective } from '../../../../../ui/directives/card-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';

interface IAtuacaoCard {
  href: string;
  label: string;
  description: string;
  cta: string;
}

@Component({
  selector: 'app-atuacao-section-component',
  imports: [ContainerDirective, CardDirective, ButtonDirective, RouterLink, EyebrowComponent],
  templateUrl: './atuacao-section-component.html',
})
export class AtuacaoSectionComponent {
  atuacaoCards: IAtuacaoCard[] = [
    {
      href: '/insalubridade',
      label: 'Insalubridade (NR-15)',
      description:
        'Perícia de insalubridade sobre agentes, exposição, EPIs e grau do adicional, incluindo ruído, calor e agentes químicos e biológicos.',
      cta: 'Ver mais sobre perícia de insalubridade',
    },
    {
      href: '/periculosidade',
      label: 'Periculosidade (NR-16)',
      description:
        'Perícia de periculosidade sobre inflamáveis, energia elétrica, motocicleta, exposição e enquadramento do adicional.',
      cta: 'Ver mais sobre perícia de periculosidade',
    },
    {
      href: '/acidente-de-trabalho',
      label: 'Acidente de trabalho',
      description:
        'Perícia de acidente de trabalho sobre causas, ambiente, máquinas e medidas de segurança.',
      cta: 'Ver mais sobre perícia de acidente de trabalho',
    },
  ];
}
