import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonDirective } from '../../../../../ui/directives/button-directive';
import { ContainerDirective } from '../../../../../ui/directives/container-directive';
import { EyebrowComponent } from '../../../../../ui/components/eyebrow-component/eyebrow-component';

interface IBullet {
  label: string;
  info: string;
}

@Component({
  selector: 'app-proposta-section-component',
  imports: [NgOptimizedImage, ButtonDirective, ContainerDirective, EyebrowComponent],
  templateUrl: './proposta-section-component.html',
})
export class PropostaSectionComponent {
  readonly bullets: IBullet[] = [
    { label: 'CREA-SP', info: '5068973016' },
    { label: '+20 anos', info: 'experiência' },
    { label: '+1500', info: 'assistências' },
    { label: '+3000', info: 'perícias' },
  ];
}
