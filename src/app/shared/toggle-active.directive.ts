import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleActive]'
})
export class ToggleActiveDirective {
  @HostBinding('class.active')
  isOpen = false;

  constructor() {}

  @HostListener('click')
  toggleActive() {
    this.isOpen = !this.isOpen;
  }
}
