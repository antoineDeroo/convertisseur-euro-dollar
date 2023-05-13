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
}

