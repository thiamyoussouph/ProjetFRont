import { Component, OnInit } from '@angular/core';
import {TypesvehiculeServiceService} from "../../services/typesvehicule-service.service";
import {Observable} from "rxjs";
import {Typesvoiture} from "../../Modele/TypesVoiture.model";

@Component({
  selector: 'app-list-typesvehicules',
  templateUrl: './list-typesvehicules.component.html',
  styleUrls: ['./list-typesvehicules.component.css']
})
export class ListTypesvehiculesComponent implements OnInit {
TypesVehicule!:Observable<Array<Typesvoiture>>;
  constructor(private typesvehiculeServiceService:TypesvehiculeServiceService) { }

  ngOnInit(): void {
    this.TypesVehicule=this.typesvehiculeServiceService.getTypeheicule();
  }

}
