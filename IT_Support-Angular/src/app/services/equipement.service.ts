import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipement} from "../classes/equipement/equipement";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  private baseUrl = "http://localhost:8080/api/equipment/";

  constructor(private httpClient: HttpClient) { }

  getEquipments(): Observable<Equipement[]>{
    return this.httpClient.get<Equipement[]>(this.baseUrl+"all")
  }

  addEquipment(equipment: Equipement): Observable<Object>{
    return this.httpClient.post(this.baseUrl+"add", equipment)
  }

  equipementById(id: number): Observable<Equipement>{
    return this.httpClient.get<Equipement>(`${this.baseUrl}${id}`)

  }

  updateEquipement(id: number, equipement: Equipement):Observable<Object>{
    return this.httpClient.put<Equipement>(`${this.baseUrl}edit/${id}`,equipement)
  }

  deleteEquipement(id: Number):Observable<Object>{
    return this.httpClient.delete<Equipement>(`${this.baseUrl}delete/${id}`)
  }

  changerStaut(id: number, equipement: Equipement): Observable<Object>{
    return this.httpClient.put<Equipement>(`${this.baseUrl}statut/${id}`,equipement)
  }

  private CreateAuthorizationHeader(){
    const jwtToken = localStorage.getItem('jwt');
    if(jwtToken){
      console.log("Jwt token found in local storage ",jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    }else{
      console.log("Jwt token not found in local storage")
    }
    return null;
  }
}
