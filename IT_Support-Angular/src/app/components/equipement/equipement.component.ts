import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../classes/equipement";
import {EquipementService} from "../../services/equipement.service";

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit{

  equipments!: Equipement[];

  constructor(private equipmentService: EquipementService) { }

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

}
