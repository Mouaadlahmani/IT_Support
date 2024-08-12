import {EtatTicket} from "../enums/etat-ticket";
import {Equipement} from "../equipement/equipement";
import {Panne} from "../panne/panne";
import {Technicien} from "../technicien/technicien";
import {Utilisateur} from "../utilisateur/utilisateur";

export class Ticket {
  ticketId!: number;
  technicien!: Technicien;
  utilisateur!: Utilisateur;
  description!: string;
  dateDeCreation!: string;
  EtatTicket!: EtatTicket;
  equipment!: Equipement;
  panne!: Panne;
}
