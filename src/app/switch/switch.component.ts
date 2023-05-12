import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit, AfterViewInit {
  val: string = "eur";
  constructor(private el: ElementRef, private service: CalculService){}
  ngOnInit(): void {
      this.val = "eur";
  }
  ngAfterViewInit(): void {
    this.val = "eur";
  }
  onValueChange(): void {
    this.service.setDollarSelected(this.val == "usd");
  }
}
