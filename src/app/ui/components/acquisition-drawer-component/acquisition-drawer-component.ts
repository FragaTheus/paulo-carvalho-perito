import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo-component/logo-component';
import { ButtonDirective } from '../../directives/button-directive';
import { CreaCopyButtonComponent } from '../crea-copy-button-component/crea-copy-button-component';
import { CtaButtonComponent } from '../cta-button-component/cta-button-component';

interface NavigationLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-acquisition-drawer-component',
  imports: [
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    ButtonDirective,
    CreaCopyButtonComponent,
    CtaButtonComponent,
  ],
  templateUrl: './acquisition-drawer-component.html',
})
export class AcquisitionDrawerComponent {
  visible = signal<boolean>(false);

  readonly navigationLinks: NavigationLink[] = [
    { path: '/', label: 'Início' },
    { path: '/advogados', label: 'Para advogados' },
    { path: '/empresas', label: 'Para empresas e jurídico' },
    { path: '/insalubridade', label: 'Insalubridade' },
    { path: '/periculosidade', label: 'Periculosidade' },
    { path: '/acidente-de-trabalho', label: 'Acidente de trabalho' },
  ];

  openDialog() {
    this.visible.set(true);
  }

  closeDialog() {
    this.visible.set(false);
  }
}
