import {Modele} from "./Modele.model";

export interface Vehicules{

  id:number;
  matricule:string;
  nombrePlace:number;
  dateSOrtie:Date;
  dateMisEnMarche:Date;
  dateAchat:Date;
  status:string;
  etats:string;
  modele:Modele;
}
