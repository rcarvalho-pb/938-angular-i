import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = '#cecece';
  }
}
