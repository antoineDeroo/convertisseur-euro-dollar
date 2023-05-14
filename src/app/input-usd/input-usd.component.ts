import { Component } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-input-usd',
  templateUrl: './input-usd.component.html',
  styleUrls: ['./input-usd.component.css']
})
export class InputUsdComponent {

  private val:number= 0;

  constructor(protected service: CalculService){}

  getValueFromService(): number {
    this.val = this.service.usd;
    return Number(this.val.toFixed(2));
  }
  onInputChange(event: any) {
    const inputValueString = event.target.value.replace(/,/g, '') || "0";
    this.val = parseFloat(inputValueString);
    this.service.usd=this.val;
  }
}
