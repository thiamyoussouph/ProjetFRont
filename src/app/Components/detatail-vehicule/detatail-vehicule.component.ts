import { Component, OnInit } from '@angular/core';
import {VehiculesService} from "../../services/vehicules.service";

@Component({
  selector: 'app-detatail-vehicule',
  templateUrl: './detatail-vehicule.component.html',
  styleUrls: ['./detatail-vehicule.component.css']
})
export class DetatailVehiculeComponent implements OnInit {

  Vehicul : any;
  constructor(private vehiculesService :VehiculesService) { }

  ngOnInit(): void {
    this.vehiculesService.getVehicules().subscribe({
      next:(data)=>{
        this.Vehicul=data;
      },error:(err)=>{
        console.log(err)
      }
    })

  }
}
