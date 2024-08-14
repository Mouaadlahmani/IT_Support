import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../../classes/equipement/equipement";
import {EquipementService} from "../../../services/equipement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-afficher-equipements',
  templateUrl: './afficher-equipements.component.html',
  styleUrls: ['./afficher-equipements.component.css']
})
export class AfficherEquipementsComponent implements OnInit{

  equipments!: Equipement[];

  constructor(private equipmentService: EquipementService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEquipments()
  }

  private getEquipments(){
    this.equipmentService.getEquipments().subscribe(
      data=>{
        this.equipments = data
        console.log(data)
      }
    )
  }

  updateEquipement(id: Number) {
    this.router.navigate(['admin/equipements/updateEquipement', id])
  }
  historique(id: Number) {
    this.router.navigate(['admin/equipements/historique', id])
  }

  changerEquipement(id: Number) {
    this.router.navigate(['admin/equipements/statut', id])
  }

  deleteEquipement(id: Number){
    this.equipmentService.deleteEquipement(id).subscribe(
      data=>{
        console.log(data)
        this.getEquipments()
      }
    )
  }

}

