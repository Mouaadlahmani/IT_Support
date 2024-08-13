import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../../classes/equipement/equipement";
import {EquipementService} from "../../../services/equipement.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-update-equipement',
  templateUrl: './update-equipement.component.html',
  styleUrls: ['./update-equipement.component.css']
})
export class UpdateEquipementComponent implements OnInit{

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
    this.equipementService.updateEquipement(this.id, this.equipement).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['admin/equipements']);
      }
    )
  }

}
