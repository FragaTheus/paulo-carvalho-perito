import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../ui/components/header-component/header-component';
import { FooterComponent } from '../../../ui/components/footer-component/footer-component';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
