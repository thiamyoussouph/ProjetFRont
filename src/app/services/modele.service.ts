import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Modele} from "../Modele/Modele.model";
import {Vehicules} from "../Modele/Vehicule.model";

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  constructor(private http:HttpClient) { }
  public getModele():Observable<Array<Modele>>{
    return this.http.get<Array<Modele>>("http://localhost:8080/affiche/modele")
  }

}
