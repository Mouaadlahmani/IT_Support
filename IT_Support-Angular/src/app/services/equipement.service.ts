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
    const headers = this.createAuthorizationHeader();
    return this.httpClient.get<Equipement[]>(this.baseUrl+"all",{ headers: headers || {} })
  }

  addEquipment(equipment: Equipement): Observable<Object>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.post(this.baseUrl+"add", equipment,{ headers: headers || {} })
  }

  equipementById(id: number): Observable<Equipement>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.get<Equipement>(`${this.baseUrl}${id}`,{ headers: headers || {} })

  }

  updateEquipement(id: number, equipement: Equipement):Observable<Object>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.put<Equipement>(`${this.baseUrl}edit/${id}`,equipement,{ headers: headers || {} })
  }

  deleteEquipement(id: Number):Observable<Object>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.delete<Equipement>(`${this.baseUrl}delete/${id}`,{ headers: headers || {} })
  }

  changerStaut(id: number, equipement: Equipement): Observable<Object>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.put<Equipement>(`${this.baseUrl}statut/${id}`,equipement,{ headers: headers || {} })
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
