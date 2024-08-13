import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { EquipementComponent } from './components/Equipement/equipement/equipement.component';
import { AddEquipementComponent } from './components/Equipement/add-equipement/add-equipement.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateEquipementComponent } from './components/Equipement/update-equipement/update-equipement.component';
import { CreatePanneComponent } from './components/AdminComponents/Panne/create-panne/create-panne.component';
import { PannesComponent } from './components/AdminComponents/Panne/pannes/pannes.component';
import { ChangerStatutComponent } from './components/Equipement/changer-statut/changer-statut.component';
import { UpdatePanneComponent } from './components/AdminComponents/Panne/update-panne/update-panne.component';
import {Router} from "@angular/router";
import { TicketComponent } from './components/AdminComponents/ticket/ticket.component';
import {EquipementsComponent} from "./components/UtilisateurComponents/equipements/equipement.component";
import { LoginComponent } from './components/auth/login/login.component';
import { UtilisateursComponent } from './components/AdminComponents/Utilisateur/utilisateurs/utilisateurs.component';
import { TechniciensComponent } from './components/AdminComponents/Utilisateur/techniciens/techniciens.component';
import { AddTechnicienComponent } from './components/AdminComponents/Utilisateur/add-technicien/add-technicien.component';
import { AddUtilisateurComponent } from './components/AdminComponents/Utilisateur/add-utilisateur/add-utilisateur.component';
import { AfficherUtilisateursComponent } from './components/AdminComponents/Utilisateur/afficher-utilisateurs/afficher-utilisateurs.component';
import { AfficherEquipementsComponent } from './components/Equipement/afficher-equipements/afficher-equipements.component';
import { AfficherPannesComponent } from './components/AdminComponents/Panne/afficher-pannes/afficher-pannes.component';
import { AfficherTechniciensComponent } from './components/AdminComponents/Utilisateur/afficher-techniciens/afficher-techniciens.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipementComponent,
    AddEquipementComponent,
    UpdateEquipementComponent,
    CreatePanneComponent,
    PannesComponent,
    ChangerStatutComponent,
    UpdatePanneComponent,
    TicketComponent,
    EquipementsComponent,
    LoginComponent,
    UtilisateursComponent,
    TechniciensComponent,
    AddTechnicienComponent,
    AddUtilisateurComponent,
    AfficherUtilisateursComponent,
    AfficherEquipementsComponent,
    AfficherPannesComponent,
    AfficherTechniciensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
