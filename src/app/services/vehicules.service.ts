import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicules} from "../Modele/Vehicule.model";

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {

  constructor(private http:HttpClient) { }
  public getVehicules():Observable<any>{
    return this.http.get("http://localhost:8080/affiche")
  }
  public deleVehicules(id: number):Observable<Array<Vehicules>>{
    return this.http.get<Array<Vehicules>>("http://localhost:8080/affiche")
  }
  public savevehicules(vehicules:Vehicules):Observable<Vehicules>{
    return this.http.post<Vehicules>("http://localhost:8080/ajout",vehicules)

  }
  public deletevehicule(id:number){
    return this.http.delete("http://localhost:8080/suprimer/"+id)

  }
}
