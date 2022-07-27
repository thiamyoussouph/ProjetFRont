import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormulaireComponent} from "./Components/formulaire/formulaire.component";
import {ListeVehiculesComponent} from "./Components/liste-vehicules/liste-vehicules.component";
import {DetatailVehiculeComponent} from "./Components/detatail-vehicule/detatail-vehicule.component";
import {ListeModeleComponent} from "./Components/liste-modele/liste-modele.component";
import {ListeMarqueComponent} from "./Components/liste-marque/liste-marque.component";
import {ListTypesvehiculesComponent} from "./Components/list-typesvehicules/list-typesvehicules.component";


const routes: Routes = [
  { path: 'forme', component: FormulaireComponent },
  { path: 'liste', component: ListeVehiculesComponent },
  {path: 'detail', component: DetatailVehiculeComponent },
  {path: 'modele', component: ListeModeleComponent},
  {path: 'marque', component: ListeMarqueComponent},
  {path: 'typesvehicule', component: ListTypesvehiculesComponent}
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule {}
