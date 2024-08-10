import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { EquipementComponent } from './components/equipement/equipement.component';
import { AddEquipementComponent } from './components/add-equipement/add-equipement.component';
import {FormsModule} from "@angular/forms";
import { UpdateEquipementComponent } from './components/update-equipement/update-equipement.component';
import { CreatePanneComponent } from './components/create-panne/create-panne.component';
import { PannesComponent } from './components/pannes/pannes.component';
import { ChangerStatutComponent } from './components/changer-statut/changer-statut.component';
import { UpdatePanneComponent } from './components/update-panne/update-panne.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipementComponent,
    AddEquipementComponent,
    UpdateEquipementComponent,
    CreatePanneComponent,
    PannesComponent,
    ChangerStatutComponent,
    UpdatePanneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
