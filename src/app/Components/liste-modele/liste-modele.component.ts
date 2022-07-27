import { Component, OnInit } from '@angular/core';
import {ModeleService} from "../../services/modele.service";
import {Observable} from "rxjs";
import {Modele} from "../../Modele/Modele.model";

@Component({
  selector: 'app-liste-modele',
  templateUrl: './liste-modele.component.html',
  styleUrls: ['./liste-modele.component.css']
})
export class ListeModeleComponent implements OnInit {
  Modele!:Observable<Array<Modele>>;
  constructor( private modeleService:ModeleService) { }

  ngOnInit(): void {
    this.Modele=this.modeleService.getModele();
  }

}
