import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Panne} from "../classes/panne/panne";
import {Observable} from "rxjs";
import {Equipement} from "../classes/equipement/equipement";

@Injectable({
  providedIn: 'root'
})
export class PanneService {

  private baseUrl="http://localhost:8080/api/panne/"

  constructor(private httpClient: HttpClient) { }

  getPannes(): Observable<Panne[]>{
    const headers = this.CreateAuthorizationHeader();
    return this.httpClient.get<Panne[]>(this.baseUrl+'all',{ headers: headers || {} })
  }

  panneById(id: number): Observable<Panne>{
    const headers = this.CreateAuthorizationHeader();
    return this.httpClient.get<Panne>(`${this.baseUrl}${id}`,{ headers: headers || {} })
  }

  updatePanne(id: number, panne: Panne):Observable<Object>{
    const headers = this.CreateAuthorizationHeader();
    return this.httpClient.put<Equipement>(`${this.baseUrl}edit/${id}`,panne,{ headers: headers || {} })
  }

  createPanne(panne: Panne):Observable<Object>{
    const headers = this.CreateAuthorizationHeader();
    return  this.httpClient.post(this.baseUrl+'add',panne,{ headers: headers || {} })
  }

  deletePanne(id:number){
    const headers = this.CreateAuthorizationHeader();
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`,{ headers: headers || {} })
  }
  private CreateAuthorizationHeader(): HttpHeaders | undefined {
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
