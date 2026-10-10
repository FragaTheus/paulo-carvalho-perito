import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

type ButtonVariants = 'primary' | 'secondary' | 'link';

@Directive({
  selector: 'a[uiButton], button[uiButton]',
  host: {
    '[class]': 'classes()',
  },
})
export class ButtonDirective {
  readonly defaultClass =
    'cursor-pointer transition-colors duration-300 flex items-center justify-center py-2 px-4 ';
  readonly variant = input<ButtonVariants>('secondary');

  readonly variants: Record<ButtonVariants, string> = {
    primary:
      'group gap-2 border border-primary hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/80',
    secondary: 'bg-transparent border border-border hover:border-primary',
    link: 'block border-l border-border hover:bg-background hover:border-primary',
  };

  readonly classes = computed(() => twMerge(this.defaultClass, this.variants[this.variant()]));
}
