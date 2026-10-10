import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';
import { CtaButtonComponent } from '../../../../../ui/components/cta-button-component/cta-button-component';

interface IContact {
  title: string;
  href: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-contato-section-component',
  imports: [ContainerDirective, EyebrowComponent, CtaButtonComponent],
  templateUrl: './contato-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoSectionComponent {
  readonly title = input('Tem uma perícia marcada ou um laudo para analisar?');
  readonly description = input(
    'Informe se o caso envolve insalubridade, periculosidade ou acidente de trabalho, a fase da perícia e os prazos em andamento.',
  );
  readonly ctaId = input('cta-contato');
  readonly ctaLabel = input('Falar sobre o caso');
  readonly ctaMessage = input(
    'Olá, Paulo! Estou na seção de contato do site e gostaria de conversar sobre a assistência técnica em um caso.',
  );

  readonly contacts: IContact[] = [
    {
      title: 'Entra em contato via WhatsApp',
      href: 'https://wa.me/5511972248445',
      icon: 'pi pi-whatsapp',
      label: '(11) 9 7224-8445',
    },
    {
      title: 'Entrar em contato via email',
      href: 'mailto:perito.paulo@bol.com.br',
      icon: 'pi pi-envelope',
      label: 'perito.paulo@bol.com.br',
    },
  ];
}
