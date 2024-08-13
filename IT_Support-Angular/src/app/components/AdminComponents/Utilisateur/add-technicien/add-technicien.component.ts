import {Component, OnInit} from '@angular/core';
import {TechnicienUserService} from "../../../../services/technicien-user.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../../../../classes/utilisateur/utilisateur";
import {Role} from "../../../../classes/enums/role";
import {Technicien} from "../../../../classes/technicien/technicien";

@Component({
  selector: 'app-add-technicien',
  templateUrl: './add-technicien.component.html',
  styleUrls: ['./add-technicien.component.css']
})
export class AddTechnicienComponent implements OnInit{

  technicien: Technicien = new Technicien();

  constructor(private service: TechnicienUserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser(){
    this.service.addTech(this.technicien).subscribe(
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

