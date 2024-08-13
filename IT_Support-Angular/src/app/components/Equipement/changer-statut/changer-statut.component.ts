import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../../classes/equipement/equipement";
import {EquipementService} from "../../../services/equipement.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EquipmentStatut} from "../../../classes/enums/equipment-statut";

@Component({
  selector: 'app-changer-statut',
  templateUrl: './changer-statut.component.html',
  styleUrls: ['./changer-statut.component.css']
})
export class ChangerStatutComponent implements OnInit{

  stautEquipement = EquipmentStatut;

  id!: number;
  equipement: Equipement = new Equipement();
  constructor(private equipementService: EquipementService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.equipementService.equipementById(this.id).subscribe(
      data =>{
        this.equipement = data;
      },error => console.log(error)
    );
  }

  onSubmit(){
    this.equipementService.changerStaut(this.id, this.equipement).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['admin/equipements']);
      }
    )
  }

}
