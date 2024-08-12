import {Component, OnInit} from '@angular/core';
import {PanneService} from "../../../services/panne.service";
import {Panne} from "../../../classes/panne/panne";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-panne',
  templateUrl: './create-panne.component.html',
  styleUrls: ['./create-panne.component.css']
})
export class CreatePanneComponent implements OnInit{

  panne = new Panne();

  constructor(private panneService: PanneService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.panneService.createPanne(this.panne).subscribe(
      data=> {
        console.log(data)
      },error => console.log(error)
    )
    this.router.navigate(['pannes'])
  }
}
