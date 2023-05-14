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
    console.log(this.val);
    return Number(this.val.toFixed(2));
  }
  sendValueToService(v: number) {
    console.log(v, this.val);
    this.service.usd=this.val;
  }
  onInputChange(event: any) {
    console.log(event);
    const inputValueString = event.target.value.replace(/,/g, '') || "0";
    this.val = parseFloat(inputValueString);
    this.sendValueToService(999);
  }
}
