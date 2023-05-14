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
    console.log(this.val);
    const formated = Number(this.val.toFixed(2));
    console.log(formated);
    return formated;
  }
  sendValueToService(v: number) {
    console.log(v, this.val);
    this.service.eur=this.val;
  }
  onInputChange(event: any) {
    console.log(event.target.value);
    const inputValueString = event.target.value.replace(/,/g, '') || "0";
    this.val = parseFloat(inputValueString);
    this.sendValueToService(999);
  }
}

