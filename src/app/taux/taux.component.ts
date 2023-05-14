import { AfterViewInit, Component } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent implements AfterViewInit {

  private val: number = 0;

  constructor(protected service: CalculService){}
  ngAfterViewInit(): void {
      setInterval(() => {
        //(2*Math.random()-1) est un nombre aléatoire entre -1 et 1.
        this.service.taux += (2*Math.random()-1) * CalculService.VARIATION_MAX_POUR_TAUX_REEL;
        this.service.taux = Math.max(this.service.taux, 0);
      },3000);
  }
  getValueFromService(): number {
    this.val = this.service.taux;
    return Number(this.val.toFixed(2));
  }
  sendValueToService() {
    this.service.taux=this.val;
  }
}
