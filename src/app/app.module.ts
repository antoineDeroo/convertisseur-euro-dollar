import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TauxComponent } from './taux/taux.component';
import { TauxFixeComponent } from './taux-fixe/taux-fixe.component';
import { CalculService } from './calcul.service';
import { FormsModule } from '@angular/forms';
import { InputEurComponent } from './input-eur/input-eur.component';
import { InputUsdComponent } from './input-usd/input-usd.component';
import { SwitchComponent } from './switch/switch.component';
import { ReadonlyDirective } from './directives/readonly/readonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    TauxComponent,
    TauxFixeComponent,
    InputEurComponent,
    InputUsdComponent,
    SwitchComponent,
    ReadonlyDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CalculService],
  bootstrap: [AppComponent]
})
export class AppModule { }
