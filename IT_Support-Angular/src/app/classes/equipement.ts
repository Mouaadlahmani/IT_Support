import {EquipmentStatut} from "./enums/equipment-statut";

export class Equipement {
  equipementId!: Number;
  name!: String;
  imgUrl!: String;
  description!: String;
  statut!: EquipmentStatut;

}
