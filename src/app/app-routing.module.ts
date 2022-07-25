import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {ListeVehiculesComponent} from "./liste-vehicules/liste-vehicules.component";


const routes: Routes = [
  { path: 'forme', component: FormulaireComponent },
  { path: 'liste', component: ListeVehiculesComponent }
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
