import { Component, ElementRef } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  val: string = "eur";
  constructor(private el: ElementRef, private service: CalculService){}
  onValueChange(): void {
    this.service.setDollarSelected(this.val == "usd");
  }
}
