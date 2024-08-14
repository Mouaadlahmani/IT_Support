import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../../services/ticket.service";
import {Router} from "@angular/router";
import {Ticket} from "../../../classes/ticket/ticket";

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit{

  id!:number
  Tickets!: Ticket[];

  constructor(private service: TicketService, private router: Router) {
  }

  ngOnInit(): void {
    this.myTickets()
  }

  myTickets(){
    this.service.getUtilisateurTickets(this.id).subscribe(
      data=>{
        console.log(data)
        this.Tickets=data
      }
    )
  }

}
