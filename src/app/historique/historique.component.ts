import { Component } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  constructor(protected service: CalculService){}

}
