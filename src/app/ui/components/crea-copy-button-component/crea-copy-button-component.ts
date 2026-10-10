import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonDirective } from '../../directives/button-directive';

@Component({
  selector: 'app-crea-copy-button-component',
  imports: [ButtonDirective],
  templateUrl: './crea-copy-button-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreaCopyButtonComponent {
  private readonly document = inject(DOCUMENT);
  readonly copyStatus = signal('');

  async copyCrea(): Promise<void> {
    const clipboard = this.document.defaultView?.navigator.clipboard;

    if (!clipboard) {
      this.copyStatus.set('Não foi possível copiar o CREA.');
      console.error('A área de transferência não está disponível.');
      return;
    }

    try {
      await clipboard.writeText('5068973016');
      this.copyStatus.set('CREA copiado para a área de transferência.');
    } catch (error) {
      console.error('Não foi possível copiar o CREA.', error);
      this.copyStatus.set('Não foi possível copiar o CREA.');
    }
  }
}
