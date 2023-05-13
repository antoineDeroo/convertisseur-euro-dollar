import { Injectable, OnInit } from '@angular/core';
import { LigneHistorique } from './historique/ligne-historique';

@Injectable({
  providedIn: 'root'
})
export class CalculService implements OnInit {

  static readonly ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL: number = 1;
  static readonly VARIATION_MAX_POUR_TAUX_REEL: number = 0.05;

  dollarSelected: boolean = false;
  tauxFixeActif: boolean = false;
  _taux: number = 1.1;
  _tauxFixe: string = "";
  _eur: number = 0;
  _usd: number = 0;

  private tauxActif: number = -1;

  historique: LigneHistorique[] = [];

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
      this._eur = this.usd / this.tauxActif;
      this.historique.push({
        tauxFixeActif: this.tauxFixeActif,
        tauxReel:this.taux,
        tauxSaisi:Number(this.tauxFixe),
        valeurInitiale:this.usd,
        valeurCalculee:this.eur,
        valeurInitialeEnEuro:false
      });
    } else {
      this._usd =  this.eur * this.tauxActif;
      this.historique.push({
        tauxFixeActif: this.tauxFixeActif,
        tauxReel:this.taux,
        tauxSaisi:Number(this.tauxFixe),
        valeurInitiale:this.eur,
        valeurCalculee:this.usd,
        valeurInitialeEnEuro:true
      });
    }
    if(this.historique.length > 5)
      this.historique.splice(1,1);
    console.log(this.historique);
  }
  calculerTauxActif(): boolean { // Returns true si tauxActif a changé.
    const ancienTaux = this.tauxActif;
    this.tauxFixeActif = false;
    if(this.tauxFixe){
      const tauxFixeNum = Number(this.tauxFixe);
      if(tauxFixeNum >= (1-CalculService.ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL)*this.taux && tauxFixeNum <= (1+CalculService.ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL)*this.taux) {
        this.tauxActif = tauxFixeNum;
        this.tauxFixeActif = true;
      } else {
        this.tauxActif = this.taux;
      }
    } else {
      this.tauxActif = this.taux;
    }
    console.log({actif:this.tauxActif,ancien:ancienTaux});
    return this.tauxActif != ancienTaux;
  }
}


