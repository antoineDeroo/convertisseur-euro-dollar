import { AfterViewInit, Component } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent implements AfterViewInit {

  private val: number = 0;

  constructor(protected service: CalculService){
    console.log("taux");
  }
  ngAfterViewInit(): void {
      setInterval(() => {
        //(2*Math.random()-1) est un nombre aléatoire entre -1 et 1.
        this.service.taux += (2*Math.random()-1) * CalculService.VARIATION_MAX_POUR_TAUX_REEL;
      },3000);
  }
  getValueFromService(): number {
    this.val = this.service.taux;
    console.log(this.val);
    return Number(this.val.toFixed(2));
  }
  sendValueToService(v: number) {
    console.log(v, this.val);
    this.service.taux=this.val;
  }
  onInputChange(event: any) {
    console.log(event);
    const inputValueString = event.target.value.replace(/,/g, '') || "0";
    this.val = parseFloat(inputValueString);
    this.sendValueToService(999);
  }
}
