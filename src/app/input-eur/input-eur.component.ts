import { Component, Input, ElementRef } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-input-eur',
  templateUrl: './input-eur.component.html',
  styleUrls: ['./input-eur.component.css']
})
export class InputEurComponent {

  @Input() isDollar: boolean = true;
  val: number = 0;

  constructor(protected service: CalculService){}

  getValueFromService(): number {
    this.val = this.service.eur;
    const formated = Number(this.val.toFixed(2));
    return formated;
  }
  onInput(event: any) {
    const inputValueString = event.target.value.replace(/,/g, '') || "0";
    this.val = parseFloat(inputValueString);
    this.service.eur=this.val;
  }
}

