import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo-component',
  imports: [RouterLink],
  templateUrl: './logo-component.html',
})
export class LogoComponent {
  href = input<string>('/');
}
