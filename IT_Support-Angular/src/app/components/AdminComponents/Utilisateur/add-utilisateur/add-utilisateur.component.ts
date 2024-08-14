import {Component, OnInit} from '@angular/core';
import {TechnicienUserService} from "../../../../services/technicien-user.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../../../../classes/utilisateur/utilisateur";
import {EquipmentStatut} from "../../../../classes/enums/equipment-statut";
import {Role} from "../../../../classes/enums/role";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit{

  utilisateur: Utilisateur = new Utilisateur();

  constructor(private service: TechnicienUserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser(){
    this.service.addUser(this.utilisateur).subscribe(
      data=>{
        console.log(data);
      }
    )
  }

  onSubmit(){
    this.addUser();
    this.router.navigate(['admin'])
  }

}
