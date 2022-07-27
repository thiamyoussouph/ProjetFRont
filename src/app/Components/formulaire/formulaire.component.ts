import { Component, OnInit } from '@angular/core';
import {Modele} from "../../Modele/Modele.model";
import {Observable} from "rxjs";
import {ModeleService} from "../../services/modele.service";
import {MarqueServiceService} from "../../services/marque-service.service";
import {TypesvehiculeServiceService} from "../../services/typesvehicule-service.service";
import {Marque} from "../../Modele/Marque.model";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Vehicules} from "../../Modele/Vehicule.model";
import {VehiculesService} from "../../services/vehicules.service";


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  recupermarque!:Array<Marque>;
  modeles!:Array<Modele>
  recupermodele!:Array<Modele>
  formulaire!: FormGroup
  constructor(private marqueServiceService:MarqueServiceService, private form:FormBuilder,private  Vehiculeservice:VehiculesService,private modeleService :ModeleService ) { }

  ngOnInit(): void {
    this.getModele()
    //this.getMarqueForme()
    this.formulaire = this.form.group({
      matricule :this.form.control(null,[Validators.required,Validators.minLength(6)]),
      nombrePlace :this.form.control(null,[Validators.required,Validators.minLength(6)]),
      modele :this.form.control(null,[Validators.required]),
      status :this.form.control(null,[Validators.required]),
      dateAchat:this.form.control(null,[Validators.required]),
      dateSOrtie:this.form.control(null,[Validators.required]),
      dateMisEnMarche:this.form.control(null,[Validators.required]),
      etats:this.form.control(null,[Validators.required]),


    })
  }
  public getModele(){
    this.modeleService.getModele().subscribe({
      next:(data)=>{
        this.recupermodele=data;
        console.log(this.recupermarque)
      }
    })
  }
 /*public getMarqueForme(){
    this.marqueServiceService.getMarque().subscribe({
      next:(data)=>{
        this.recupermarque=data;
        console.log(this.recupermarque)
      }
    })
 }*/

 /*public loadModele() {
    let id:number = this.formulaire.value.marque
    this.marqueServiceService.getMarqueById(id).subscribe({
      next:(data)=>{
        this.modeles=data.modeles
      }
    })
  }*/
  loadtypes(){

  }

  SaveVehicule() {
    let vehicule:Vehicules=this.formulaire.value;
    this.Vehiculeservice.savevehicules(this.formulaire.value).subscribe({
      next:data=>{
        alert("enregistrer")
      },error:err=>{
        alert("erreur");
    }
    })

  }

}
