import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VehiculesService} from "../../services/vehicules.service";
import {catchError, Observable, throwError} from "rxjs";
import {Vehicules} from "../../Modele/Vehicule.model";


@Component({
  selector: 'app-liste-vehicules',
  templateUrl: './liste-vehicules.component.html',
  styleUrls: ['./liste-vehicules.component.css']
})
export class ListeVehiculesComponent implements OnInit {
Vehicule !:Observable<Array<Vehicules>>;
errorMessage!:string;
  constructor(private vehiculesService :VehiculesService) { }

  ngOnInit(): void {
 this.Vehicule=this.vehiculesService.getVehicules().pipe(
   catchError(err => {
     this.errorMessage=err.message;
     return throwError(err)
   })
 );

  }

  delecteVehicules(v: Vehicules) {
    this.vehiculesService.deletevehicule(v.id).subscribe({
      next:(rep)=>{

      }
    })
  }
}
