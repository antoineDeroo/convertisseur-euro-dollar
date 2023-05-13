import { AfterViewInit, Component } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent implements AfterViewInit {

  constructor(protected service: CalculService){
    console.log("taux");
  }
  ngAfterViewInit(): void {
      setInterval(() => {
        this.service.taux += (2*Math.random()-1) * CalculService.VARIATION_MAX_POUR_TAUX_REEL;
      },3000);
  }
  onClickButton() {
    this.service.taux++;
  }
}
