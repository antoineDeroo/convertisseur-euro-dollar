import { Component } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-input-usd',
  templateUrl: './input-usd.component.html',
  styleUrls: ['./input-usd.component.css']
})
export class InputUsdComponent {
  constructor(protected service: CalculService){}
}
