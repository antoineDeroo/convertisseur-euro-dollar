import { Component } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-taux-fixe',
  templateUrl: './taux-fixe.component.html',
  styleUrls: ['./taux-fixe.component.css']
})
export class TauxFixeComponent {
  protected variationMax: number = CalculService.ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL*100;
  constructor(protected service: CalculService){}
}
