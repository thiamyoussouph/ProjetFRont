import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormulaireComponent} from "./Components/formulaire/formulaire.component";
import {ListeVehiculesComponent} from "./Components/liste-vehicules/liste-vehicules.component";
import {DetatailVehiculeComponent} from "./Components/detatail-vehicule/detatail-vehicule.component";
import {ListeModeleComponent} from "./Components/liste-modele/liste-modele.component";
import {ListeMarqueComponent} from "./Components/liste-marque/liste-marque.component";
import {ListTypesvehiculesComponent} from "./Components/list-typesvehicules/list-typesvehicules.component";
import {UpdateVehuculeComponent} from "./Components/update-vehucule/update-vehucule.component";


const routes: Routes = [
  { path: 'forme', component: FormulaireComponent },
  { path: 'liste', component: ListeVehiculesComponent },
  {path: 'detail/:id', component: DetatailVehiculeComponent },
  {path: 'modele', component: ListeModeleComponent},
  {path: 'marque', component: ListeMarqueComponent},
  {path: 'typesvehicule', component: ListTypesvehiculesComponent},
  {path: 'updateEmployer/:id', component: UpdateVehuculeComponent}
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
