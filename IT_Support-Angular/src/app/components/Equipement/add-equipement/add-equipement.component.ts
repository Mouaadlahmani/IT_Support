import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../../classes/equipement/equipement";
import {EquipementService} from "../../../services/equipement.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-add-equipement',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.css']
})
export class AddEquipementComponent implements OnInit{

  equipment: Equipement = new Equipement();

  constructor(private equipmentService: EquipementService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addEquipment(){
    this.equipmentService.addEquipment(this.equipment).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['admin/equipements'])
      }
    )
  }

  onSubmit(){
    this.equipment.statut=0
    console.log(this.equipment)
    this.addEquipment()
  }

}
