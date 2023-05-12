import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CalculService } from 'src/app/calcul.service';

@Directive({
  selector: '[InputMonnaie]'
})
export class InputMonnaieDirective implements OnChanges {
  @Input() input: any;
  el: any;

  constructor(protected service: CalculService,
              el: ElementRef) {
                this.el = el;
              }

  ngOnChanges(changes: any) {
    console.log(this.input);

    console.log(this.el);
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.id);
    if (changes.input) {
      console.log(changes.input);
      //this.service.setTaux()
    }
  }



}
