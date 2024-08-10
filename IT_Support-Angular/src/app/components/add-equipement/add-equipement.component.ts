import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../classes/equipement";
import {EquipementService} from "../../services/equipement.service";

@Component({
  selector: 'app-add-equipement',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.css']
})
export class AddEquipementComponent implements OnInit{

  equipment: Equipement = new Equipement();

  constructor(private equipmentService: EquipementService) { }

  ngOnInit(): void {
  }

  addEquipment(){
    this.equipmentService.addEquipment(this.equipment).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  onSubmit(){
    this.equipment.statut="DISPONIBLE"
    console.log(this.equipment)
    this.addEquipment()
  }

}
