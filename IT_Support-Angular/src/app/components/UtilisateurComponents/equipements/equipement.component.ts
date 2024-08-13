import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../../classes/equipement/equipement";
import {EquipementService} from "../../../services/equipement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementsComponent implements OnInit{

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


}
