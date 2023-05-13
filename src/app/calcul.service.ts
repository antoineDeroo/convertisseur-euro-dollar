import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService implements OnInit {

  static readonly ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL: number = 0.02;
  static readonly VARIATION_MAX_POUR_TAUX_REEL: number = 0.05;

  dollarSelected: boolean = false;
  tauxFixeActif: boolean = false;
  _taux: number = 1.1;
  _tauxFixe: string = "";
  _eur: number = 0;
  _usd: number = 0;

  private tauxActif: number = -1;

  constructor() {}

  ngOnInit() {
      this.calculerTauxActif();
  }
  setDollarSelected(b: boolean) {
    this.dollarSelected = b;
  }
  set taux(t: number) {
    this._taux = t;
    if(this.calculerTauxActif()){
      this.majMontants(this.dollarSelected);
    }
  }
  get taux(): number {
    return this._taux;
  }
  set tauxFixe(t: string) {
    this._tauxFixe = t;
    if(this.calculerTauxActif()){
      this.majMontants(this.dollarSelected);
    }
  }
  get tauxFixe(): string {
    return this._tauxFixe;
  }
  set eur(e: number) {
    if(this._eur != e){
      this._eur = e;
      this.majMontants(false);
    }
  }
  get eur(): number {
    return this._eur;
  }
  set usd(u: number) {
    if(this.usd != u){
      this._usd = u;
      this.majMontants(true);
    }
  }
  get usd(): number {
    return this._usd;
  }
  majMontants(fromDollar: boolean){
    if(fromDollar){
      this.eur = this.usd / this.tauxActif;
    } else {
      this.usd =  this.eur * this.tauxActif;
    }
  }
  calculerTauxActif(): boolean { // Returns true si tauxActif a changé.
    const ancienTaux = this.tauxActif;
    this.tauxFixeActif = false;
    if(this.tauxFixe){
      const tauxFixeNum = Number(this.tauxFixe);
      if(tauxFixeNum >= (1-CalculService.ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL)*this.taux && tauxFixeNum <= (1+CalculService.ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL)*this.taux) {
        this.tauxActif = ancienTaux;
        this.tauxFixeActif = true;
      } else {
        this.tauxActif = this.taux;
      }
    }
    this.tauxActif = this.taux;
    return this.tauxActif != ancienTaux;
  }
}
