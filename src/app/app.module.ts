import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { FormulaireComponent } from './Components/formulaire/formulaire.component';
import { ListeVehiculesComponent } from './Components/liste-vehicules/liste-vehicules.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { DetatailVehiculeComponent } from './Components/detatail-vehicule/detatail-vehicule.component';
import { ListeModeleComponent } from './Components/liste-modele/liste-modele.component';
import { ListeMarqueComponent } from './Components/liste-marque/liste-marque.component';
import { ListTypesvehiculesComponent } from './Components/list-typesvehicules/list-typesvehicules.component';
import { UpdateVehuculeComponent } from './Components/update-vehucule/update-vehucule.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    ListeVehiculesComponent,
    DetatailVehiculeComponent,
    ListeModeleComponent,
    ListeMarqueComponent,
    ListTypesvehiculesComponent,
    UpdateVehuculeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
