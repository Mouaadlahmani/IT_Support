import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Utilisateur} from "../classes/utilisateur/utilisateur";
import {Observable} from "rxjs";
import {Technicien} from "../classes/technicien/technicien";

@Injectable({
  providedIn: 'root'
})
export class TechnicienUserService {

  private url="http://localhost:8080/api/auth/register/"
  private getUrl="http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  addUser(utilisateur: Utilisateur):Observable<Object>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.post(this.url+'utilisateur',utilisateur,{ headers: headers || {} })
  }

  getUsers():Observable<Utilisateur[]>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.get<Utilisateur[]>(this.getUrl+'utilisateurs',{ headers: headers || {} })
  }

  addTech(technicien: Technicien):Observable<Object>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.post(this.url+'technicien', technicien,{ headers: headers || {} })
  }

  getTechs():Observable<Technicien[]>{
    const headers = this.createAuthorizationHeader();
    return this.httpClient.get<Technicien[]>(this.getUrl+'techniciens',{ headers: headers || {} })
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
