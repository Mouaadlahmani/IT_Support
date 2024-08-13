import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../classes/ticket/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url = "http://localhost:8080/api/ticket/"

  constructor(private httpClient: HttpClient) { }

  getTickets(): Observable<Ticket[]>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.get<Ticket[]>(this.url+'all',{ headers: headers || {} });
  }

  addTicket(tiket: Ticket):Observable<Ticket>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.post<Ticket>(this.url+'add', tiket,{ headers: headers || {} });
  }
  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }

  }
}
