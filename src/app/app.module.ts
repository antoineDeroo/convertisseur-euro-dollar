import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TauxContainerComponent } from './taux-container/taux-container.component';
import { TauxComponent } from './taux/taux.component';
import { InputMonnaieDirective } from './directives/input-monnaie/input-monnaie.directive';
import { TauxFixeComponent } from './taux-fixe/taux-fixe.component';
import { TauxFixeContainerComponent } from './taux-fixe-container/taux-fixe-container.component';
import { CalculService } from './calcul.service';
import { FormsModule } from '@angular/forms';
import { InputEurComponent } from './input-eur/input-eur.component';
import { InputUsdComponent } from './input-usd/input-usd.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TauxContainerComponent,
    TauxComponent,
    InputMonnaieDirective,
    TauxFixeComponent,
    TauxFixeContainerComponent,
    InputEurComponent,
    InputUsdComponent,
    SwitchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CalculService],
  bootstrap: [AppComponent]
})
export class AppModule { }
