import { Component, input } from '@angular/core';

@Component({
  selector: 'app-eyebrow-component',
  imports: [],
  templateUrl: './eyebrow-component.html',
})
export class EyebrowComponent {
  label = input.required<string>();
}
