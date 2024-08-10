import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Panne} from "../classes/panne";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PanneService {

  private baseUrl="http://localhost:8080/api/panne/"

  constructor(private httpClient: HttpClient) { }

  getPannes(): Observable<Panne[]>{
    return this.httpClient.get<Panne[]>(this.baseUrl+'all')
  }

  createPanne(panne: Panne):Observable<Object>{
    return  this.httpClient.post(this.baseUrl+'add',panne)
  }

  deletePanne(id:number){
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`)
  }

}
