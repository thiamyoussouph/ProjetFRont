import { Component, OnInit } from '@angular/core';
import {VehiculesService} from "../../services/vehicules.service";
import {ActivatedRoute} from "@angular/router";
import {Vehicules} from "../../Modele/Vehicule.model";

@Component({
  selector: 'app-detatail-vehicule',
  templateUrl: './detatail-vehicule.component.html',
  styleUrls: ['./detatail-vehicule.component.css']
})
export class DetatailVehiculeComponent implements OnInit {
 id:any
  Vehicul !: Vehicules;
  constructor(private vehiculesService :VehiculesService ,private route:ActivatedRoute) {
    this.id= this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.vehiculesService.getVehicules().subscribe({
      next:(data)=>{
        this.Vehicul=data;
      },error:(err)=>{
        console.log(err)
      }
    })
    this.id=this.route.snapshot.params["id"]

  }
}
