import { Component, Input, ElementRef, Renderer2, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CalculService } from '../calcul.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input-eur',
  templateUrl: './input-eur.component.html',
  styleUrls: ['./input-eur.component.css']
})
export class InputEurComponent implements AfterViewInit {

  @Input() isDollar: boolean = true;
  val: number = 0;
  private subUsd: Subscription;
  private subSel: Subscription;
  isActive: boolean = true;

  constructor(protected service: CalculService,
              private renderer: Renderer2,
              public el: ElementRef){

    this.subUsd = this.service.usd$.subscribe(usd => {
      let newVal = this.service.getTauxActif() * usd;
      if(newVal != this.val)
        this.val = newVal;
    });
    this.subSel = this.service.dollarSelected$.subscribe(dollarSelected => {
      if(this.isActive && dollarSelected )
        this.setInactive();
      else if(!this.isActive && !dollarSelected)
        this.setActive();
    });
  }
  ngAfterViewInit(): void {
      console.log(this.el.nativeElement);
  }

  setActive(){
    this.el.nativeElement.removeAttribute("readonly");
    this.el.nativeElement.classList.add("active");
    this.isActive = true;
  }
  setInactive(){
    this.el.nativeElement.setAttribute("readonly","");
    this.el.nativeElement.classList.remove("active");
    this.isActive = false;
  }
  onFocus() {
    this.service.setDollarSelected(this.isDollar);
  }
  onValueChange(): void {
    console.log(this.val);
    this.service.setEur(this.val);
  }
  ngOnDestroy(): void {
    this.subSel.unsubscribe();
    this.subUsd.unsubscribe();
  }
}

