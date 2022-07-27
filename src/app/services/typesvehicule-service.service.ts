import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Typesvoiture} from "../Modele/TypesVoiture.model";

@Injectable({
  providedIn: 'root'
})
export class TypesvehiculeServiceService {

  constructor(private http:HttpClient) { }
  public getTypeheicule():Observable<Array<Typesvoiture>>{
    return this.http.get<Array<Typesvoiture>>("http://localhost:8080/affiche/typesvehicule")
  }
}
