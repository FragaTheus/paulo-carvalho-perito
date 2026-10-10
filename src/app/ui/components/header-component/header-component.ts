import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerDirective } from '../../directives/container-directive';
import { AcquisitionDrawerComponent } from '../acquisition-drawer-component/acquisition-drawer-component';
import { LogoComponent } from '../logo-component/logo-component';
import { CtaButtonComponent } from '../cta-button-component/cta-button-component';

@Component({
  selector: 'app-header-component',
  imports: [ContainerDirective, AcquisitionDrawerComponent, LogoComponent, CtaButtonComponent],
  templateUrl: './header-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
