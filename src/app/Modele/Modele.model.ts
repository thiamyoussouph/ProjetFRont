import {Marque} from "./Marque.model";
import {Typesvoiture} from "./TypesVoiture.model";


export interface Modele{
  id:number,
  libellet:string
  // marque:Marque;
  typesVehicules:Typesvoiture;

}
