import { Directive, ElementRef, HostListener } from '@angular/core';
import {Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: true
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
