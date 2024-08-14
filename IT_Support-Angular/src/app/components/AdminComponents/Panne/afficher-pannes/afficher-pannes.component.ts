import {Component, OnInit} from '@angular/core';
import {Panne} from "../../../../classes/panne/panne";
import {PanneService} from "../../../../services/panne.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-afficher-pannes',
  templateUrl: './afficher-pannes.component.html',
  styleUrls: ['./afficher-pannes.component.css']
})
export class AfficherPannesComponent implements OnInit{

  panneList!:Panne[];

  id!:number;

  constructor(private panneService: PanneService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPannes()
  }

  updatePanne(id: Number) {
    this.router.navigate(['admin/updatePanne', id]);
  }

  getPannes(){
    this.panneService.getPannes().subscribe(
      data=>{
        console.log(data)
        this.panneList=data
      }
    )
  }

  deletePanne(id:number){
    this.panneService.deletePanne(id).subscribe(
      data=>{
        console.log(data)
        this.getPannes()
      }
    )
  }

}

