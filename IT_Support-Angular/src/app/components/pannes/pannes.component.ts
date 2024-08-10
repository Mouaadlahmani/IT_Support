import {Component, OnInit} from '@angular/core';
import {PanneService} from "../../services/panne.service";
import {Panne} from "../../classes/panne";

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent implements OnInit{

  panneList!:Panne[];

  id!:number;

  constructor(private panneService: PanneService) {
  }

  ngOnInit(): void {
   this.getPannes()
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
