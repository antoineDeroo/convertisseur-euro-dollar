import { Component, OnInit } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent implements OnInit{

  protected val: number = 1.1;

  constructor(private service: CalculService){

  }
  ngOnInit(): void {
      setInterval(() => {
        this.val = Math.random() > 0.5 ? this.val + 0.05 : this.val - 0.05;
      },3000);
  }
  onValueChange(): void {
    this.service.setTaux(this.val);
  }
}
