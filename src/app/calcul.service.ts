import { Injectable, OnInit } from '@angular/core';
import { TauxComponent } from './taux/taux.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculService implements OnInit {

  private dollarSelected: boolean = false;
  dollarSelected$ = new Subject<any>();
  private tauxFixe: number = 0;
  tauxFixe$ = new Subject<any>();
  private taux: number = 0;
  taux$ = new Subject<any>();
  private eur: number = 0;
  eur$ = new Subject<any>();
  private usd: number = 0;
  usd$ = new Subject<any>();

  private tauxActif: number = 1; // Évite les divisions par 0.

  constructor() {}

  ngOnInit() {
      this.calculerTauxActif();
  }
  setDollarSelected(b: boolean) {
    this.dollarSelected = b;
    this.dollarSelected$.next(b);
  }
  setTaux(taux: number) {
    this.taux = taux;
    this.calculerTauxActif();
  }
  setTauxFixe(taux: number) {
    this.tauxFixe = taux;
    this.calculerTauxActif();
  }
  setEur(eur: number) {
    this.eur = eur;
    this.majMontants();
  }
  setUsd(usd: number) {
    this.usd = usd;
    this.majMontants();
  }
  majMontants(){
    if(this.dollarSelected){
      this.eur = this.tauxActif * this.usd;
      this.eur$.next(this.eur);
    } else {
      this.usd =  this.eur / this.tauxActif;
      this.usd$.next(this.usd);
    }
    console.log(this.usd);
    console.log(this.eur);
  }
  getTauxActif(): number {
    return this.tauxActif;
  }
  calculerTauxActif(){
    if(this.tauxFixe!=1 && Math.abs(this.tauxFixe - this.taux) < 0.05)
      this.tauxActif = this.tauxFixe;
    else
      this.tauxActif = this.taux;
  }
}
