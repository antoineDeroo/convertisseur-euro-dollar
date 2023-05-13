import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appReadonly]'
})
export class ReadonlyDirective {

  @Input() appReadonly: boolean = true;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    if(this.appReadonly){
      this.el.nativeElement.setAttribute("readonly","");
    } else {
      this.el.nativeElement.removeAttribute("readonly");
    }
  }
}
