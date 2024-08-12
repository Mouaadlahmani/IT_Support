import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { EquipementComponent } from './components/AdminComponents/equipement/equipement.component';
import { AddEquipementComponent } from './components/AdminComponents/add-equipement/add-equipement.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateEquipementComponent } from './components/AdminComponents/update-equipement/update-equipement.component';
import { CreatePanneComponent } from './components/AdminComponents/create-panne/create-panne.component';
import { PannesComponent } from './components/AdminComponents/pannes/pannes.component';
import { ChangerStatutComponent } from './components/AdminComponents/changer-statut/changer-statut.component';
import { UpdatePanneComponent } from './components/AdminComponents/update-panne/update-panne.component';
import {Router} from "@angular/router";
import { TicketComponent } from './components/AdminComponents/ticket/ticket.component';
import {EquipementsComponent} from "./components/UtilisateurComponents/equipements/equipement.component";

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
    EquipementsComponent
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
