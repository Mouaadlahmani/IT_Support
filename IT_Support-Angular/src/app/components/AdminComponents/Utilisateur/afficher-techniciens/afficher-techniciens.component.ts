import {Component, OnInit} from '@angular/core';
import {Technicien} from "../../../../classes/technicien/technicien";
import {TechnicienUserService} from "../../../../services/technicien-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-afficher-techniciens',
  templateUrl: './afficher-techniciens.component.html',
  styleUrls: ['./afficher-techniciens.component.css']
})
export class AfficherTechniciensComponent implements OnInit{

  techniciens!: Technicien[];

  constructor(private service: TechnicienUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTechniciens()
  }

  getTechniciens(){
    this.service.getTechs().subscribe(
      data=>{
        console.log(data);
        this.techniciens=data;
      }
    )
  }

}
