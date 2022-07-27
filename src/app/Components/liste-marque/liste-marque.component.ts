import { Component, OnInit } from '@angular/core';
import {MarqueServiceService} from "../../services/marque-service.service";
import {Observable} from "rxjs";
import {Marque} from "../../Modele/Marque.model";

@Component({
  selector: 'app-liste-marque',
  templateUrl: './liste-marque.component.html',
  styleUrls: ['./liste-marque.component.css']
})
export class ListeMarqueComponent implements OnInit {
Marque!:Observable<Array<Marque>>;
  constructor(private marqueServiceService:MarqueServiceService) { }

  ngOnInit(): void {
  this.Marque=this.marqueServiceService.getMarque();
  }

}
