import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'red';

  constructor(private el: ElementRef) { 
    console.log (HighlightDirective);
    el.nativeElement.style.color = this.appHighlight
  }

}
