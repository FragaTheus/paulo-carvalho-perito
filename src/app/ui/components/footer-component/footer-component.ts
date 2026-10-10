import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo-component/logo-component';

interface FooterLink {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
}

@Component({
  selector: 'app-footer-component',
  imports: [RouterLink, LogoComponent],
  templateUrl: './footer-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly contacts: FooterLink[] = [
    {
      href: 'https://wa.me/5511972248445',
      label: '(11) 9 7224-8445',
      icon: 'pi pi-whatsapp',
      external: true,
    },
    {
      href: 'mailto:perito.paulo@bol.com.br',
      label: 'perito.paulo@bol.com.br',
      icon: 'pi pi-envelope',
    },
  ];

  readonly socialLinks: FooterLink[] = [
    {
      href: 'https://www.linkedin.com/in/paulo-carvalho-pereira-2507a22ba/',
      label: 'LinkedIn',
      icon: 'pi pi-linkedin',
      external: true,
    },
    {
      href: 'https://www.instagram.com/pcpaulocarvalho/',
      label: 'Instagram',
      icon: 'pi pi-instagram',
      external: true,
    },
  ];

  readonly navigationLinks = [
    { path: '/', label: 'Início' },
    { path: '/advogados', label: 'Para advogados' },
    { path: '/empresas', label: 'Para empresas e jurídico' },
    { path: '/insalubridade', label: 'Insalubridade' },
    { path: '/periculosidade', label: 'Periculosidade' },
    { path: '/acidente-de-trabalho', label: 'Acidente de trabalho' },
  ];
}
