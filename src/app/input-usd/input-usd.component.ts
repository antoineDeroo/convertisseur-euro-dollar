import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-input-usd',
  templateUrl: './input-usd.component.html',
  styleUrls: ['./input-usd.component.css']
})
export class InputUsdComponent implements OnInit{

  val: number = 0;
  private subEur: Subscription;
  private subSel: Subscription;
  isActive: boolean = false;

  constructor(protected service: CalculService,
              private renderer: Renderer2,
              public el: ElementRef)
  {
    console.log("input-usd");
    this.subEur = this.service.eur$.subscribe(eur => {
      console.log(eur);
      let newVal = eur / this.service.getTauxActif();
      if(newVal != this.val)
        this.val = newVal;
    });
    this.subSel = this.service.dollarSelected$.subscribe(dollarSelected => {
      if(this.isActive && !dollarSelected )
        this.setInactive();
      else if(!this.isActive && dollarSelected)
        this.setActive();
    });
  }

  ngOnInit(): void {
    this.renderer.setProperty(this.el.nativeElement, 'id',  "eur");
    console.log(this.el.nativeElement.id);
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
  onValueChange(): void {
    this.service.setUsd(this.val);
  }
  ngOnDestroy(): void {
    this.subSel.unsubscribe();
    this.subEur.unsubscribe();
  }
}
