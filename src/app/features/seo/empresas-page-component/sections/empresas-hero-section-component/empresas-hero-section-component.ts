import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { ButtonDirective } from '../../../../../ui/directives/button-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';
import { CtaButtonComponent } from '../../../../../ui/components/cta-button-component/cta-button-component';

@Component({
  selector: 'app-empresas-hero-section-component',
  imports: [ContainerDirective, ButtonDirective, RouterLink, EyebrowComponent, CtaButtonComponent],
  templateUrl: './empresas-hero-section-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresasHeroSectionComponent {}
