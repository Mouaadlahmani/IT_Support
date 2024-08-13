import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../../classes/utilisateur/utilisateur";
import {TechnicienUserService} from "../../../../services/technicien-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-afficher-utilisateurs',
  templateUrl: './afficher-utilisateurs.component.html',
  styleUrls: ['./afficher-utilisateurs.component.css']
})
export class AfficherUtilisateursComponent implements OnInit{

  Utilisateurs!: Utilisateur[];

  constructor(private service: TechnicienUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.service.getUsers().subscribe(
      data=>{
        console.log(data);
        this.Utilisateurs= data;
      }
    )
  }

}

