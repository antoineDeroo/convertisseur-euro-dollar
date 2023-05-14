import { Injectable } from '@angular/core';
import { LigneHistorique } from './historique/ligne-historique';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  static readonly ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL: number = 0.02;
  static readonly VARIATION_MAX_POUR_TAUX_REEL: number = 0.05;

  dollarSelected: boolean = false;
  tauxFixeActif: boolean = false;
  private _taux: number = 1.1;
  private _tauxFixe: string = "0";
  private _eur: number = 0;
  private _usd: number = 0;

  private tauxActif: number = this._taux;

  historique: LigneHistorique[] = [];

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
        tauxFixeActif:        this.tauxFixeActif,
        tauxReel:             Number(this.taux),
        tauxSaisi:            Number(this.tauxFixe),
        valeurInitiale:       Number(this.usd),
        valeurCalculee:       Number(this.eur),
        valeurInitialeEnEuro: false
      });
    } else {
      this._usd =  this.eur * this.tauxActif;
      this.historique.push({
        tauxFixeActif:        this.tauxFixeActif,
        tauxReel:             Number(this.taux),
        tauxSaisi:            Number(this.tauxFixe),
        valeurInitiale:       Number(this.eur),
        valeurCalculee:       Number(this.usd),
        valeurInitialeEnEuro: true
      });
    }
    if(this.historique.length > 5)
      this.historique.splice(1,1);
    console.log(this.historique);
  }
  calculerTauxActif(): boolean { // Returns true si tauxActif a changé.
    const ancienTaux = this.tauxActif;
    const tauxNum = Number(this.taux);
    this.tauxFixeActif = false;
    if(this.tauxFixe){
      const tauxFixeNum = Number(this.tauxFixe);
      if(tauxFixeNum >= (1-CalculService.ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL)*tauxNum && tauxFixeNum <= (1+CalculService.ECART_RELATIF_MAX_ENTRE_TAUX_FIXE_ET_REEL)*tauxNum) {
        this.tauxActif = tauxFixeNum;
        this.tauxFixeActif = true;
      } else {
        this.tauxActif = tauxNum;
      }
    } else {
      this.tauxActif = tauxNum;
    }
    console.log({actif:this.tauxActif,ancien:ancienTaux});
    return this.tauxActif != ancienTaux;
  }
}


