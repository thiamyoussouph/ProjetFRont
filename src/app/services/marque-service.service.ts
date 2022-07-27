import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Marque} from "../Modele/Marque.model";

@Injectable({
  providedIn: 'root'
})
export class MarqueServiceService {

  constructor(private http:HttpClient) { }
  public getMarque():Observable<Array<Marque>>{
    return this.http.get<Array<Marque>>("http://localhost:8080/affiche/marque")
  }
  public getMarqueById(id:number):Observable<Marque>{
    return this.http.get<Marque>("http://localhost:8080/affiche/marque/"+id)
  }
}
