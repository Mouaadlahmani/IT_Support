import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    return this.httpClient.get<Panne[]>(this.baseUrl+'all')
  }

  panneById(id: number): Observable<Panne>{
    return this.httpClient.get<Panne>(`${this.baseUrl}${id}`)
  }

  updatePanne(id: number, panne: Panne):Observable<Object>{
    return this.httpClient.put<Equipement>(`${this.baseUrl}edit/${id}`,panne)
  }

  createPanne(panne: Panne):Observable<Object>{
    return  this.httpClient.post(this.baseUrl+'add',panne)
  }

  deletePanne(id:number){
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`)
  }

}
