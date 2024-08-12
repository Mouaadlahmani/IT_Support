import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../classes/ticket/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url = "http://localhost:8080/api/ticket/"

  constructor(private httpClient: HttpClient) { }

  getTickets(): Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(this.url+'all');
  }

  addTicket(tiket: Ticket):Observable<Ticket>{
    return this.httpClient.post<Ticket>(this.url+'add', tiket);
  }
}
