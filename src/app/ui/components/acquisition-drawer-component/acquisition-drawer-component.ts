import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'handleKeydown($event)',
  },
})
export class AcquisitionDrawerComponent {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

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
    requestAnimationFrame(() => {
      this.elementRef.nativeElement.querySelector<HTMLButtonElement>('#drawer-close')?.focus();
    });
  }

  closeDialog() {
    if (!this.visible()) return;

    this.visible.set(false);
    requestAnimationFrame(() => {
      this.elementRef.nativeElement.querySelector<HTMLButtonElement>('#drawer-trigger')?.focus();
    });
  }

  handleKeydown(event: KeyboardEvent) {
    if (!this.visible()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeDialog();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = this.elementRef.nativeElement.querySelectorAll<HTMLElement>(
      '#drawer-panel a[href], #drawer-panel button:not([disabled])',
    );
    const first = focusableElements.item(0);
    const last = focusableElements.item(focusableElements.length - 1);

    if (!first || !last) return;

    const activeElementIsInDialog = this.elementRef.nativeElement
      .querySelector('#drawer-panel')
      ?.contains(document.activeElement);

    if (!activeElementIsInDialog) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
