import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TicketService} from "../../../services/ticket.service";
import {Ticket} from "../../../classes/ticket/ticket";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  tikets!: Ticket[];

  constructor(private httpClient: HttpClient,
              private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.getTickets()
  }
  getTickets(){
    this.ticketService.getTickets().subscribe(
      data=>{
        console.log(data)
        this.tikets = data;
      }
    )
  }

}
