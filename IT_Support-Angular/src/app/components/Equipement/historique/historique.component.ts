import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../../services/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Ticket} from "../../../classes/ticket/ticket";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit{
  id!:number;
  historique!:Ticket[];

  constructor(private service:TicketService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getHistorique(this.id);
  }

  getHistorique(id: number){
    this.service.getEquipementTickets(id).subscribe(
      data=>{
        console.log(data)
        this.historique = data;
      }
    )
  }

}
